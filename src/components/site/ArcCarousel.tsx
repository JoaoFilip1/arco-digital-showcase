import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const SPEED = 26; // px per second
const GAP = 28;

function useMeasuredWidth() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, width };
}

export function ArcCarousel() {
  const { ref, width } = useMeasuredWidth();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef<{ pointerId: number; startX: number; startOffset: number } | null>(
    null,
  );

  // responsive sizing
  const cardWidth = width >= 1280 ? 210 : width >= 1024 ? 190 : width >= 768 ? 200 : 190;
  const amplitude = width >= 1024 ? 92 : width >= 768 ? 62 : 34;
  const step = cardWidth + GAP;
  const copies = width > 0 ? Math.max(2, Math.ceil((width + step * 2) / (projects.length * step))) : 2;
  const items = Array.from({ length: copies }, () => projects).flat();
  const total = items.length * step;

  useEffect(() => {
    if (!width) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let last = performance.now();

    const render = () => {
      const centerX = width / 2;
      const half = width / 2 + cardWidth;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        let x = (i * step + offsetRef.current) % total;
        if (x < 0) x += total;
        x -= cardWidth + GAP;
        const cardCenter = x + cardWidth / 2;
        const t = Math.max(-1, Math.min(1, (cardCenter - centerX) / half));
        const drop = amplitude * (1 - Math.cos((Math.PI * t) / 2));
        const rot = 4 * t;
        el.style.transform = `translate3d(${x}px, ${drop}px, 0) rotate(${rot}deg)`;
      });
    };

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && !draggingRef.current && !reduced) {
        offsetRef.current -= SPEED * dt;
        if (offsetRef.current < -total) offsetRef.current += total;
      }
      render();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [width, cardWidth, step, total, amplitude]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    draggingRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startOffset: offsetRef.current,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = draggingRef.current;
    if (!d || d.pointerId !== e.pointerId) return;
    offsetRef.current = d.startOffset + (e.clientX - d.startX);
  };

  const endDrag = () => {
    draggingRef.current = null;
  };

  return (
    <div
      ref={ref}
      className="relative w-full touch-pan-y overflow-hidden"
      style={{ height: cardWidth * 0.75 + amplitude + 130 }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* linha discreta acompanhando o arco */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 220 C 250 60, 750 60, 1000 220"
          fill="none"
          stroke="currentColor"
          className="text-primary/10"
          strokeWidth="1"
        />
      </svg>

      <div ref={trackRef} className="absolute inset-0">
        {items.map((project, i) => (
          <div
            key={`${project.slug}-${i}`}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="absolute left-0 top-0 will-change-transform transition-[scale] duration-300 hover:z-10 hover:scale-[1.05]"
            style={{ width: cardWidth }}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
