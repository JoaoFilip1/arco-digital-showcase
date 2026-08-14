import restaurante from "@/assets/projeto-restaurante.jpg";
import clinica from "@/assets/projeto-clinica.jpg";
import hotelPatudo from "@/assets/projeto-hotel-patudo.jpg";
import englishWithMih from "@/assets/projeto-english-with-mih.jpg";
import arquitetura from "@/assets/projeto-arquitetura.jpg";
import academia from "@/assets/projeto-academia.jpg";

export type Project = {
  slug: string;
  name: string;
  category: string;
  image: string;
  domain: string;
};

export const projects: Project[] = [
  {
    slug: "restaurante",
    name: "Restaurante",
    category: "Site Institucional",
    image: restaurante,
    domain: "restaurante.com.br",
  },
  {
    slug: "clinica",
    name: "Clínica",
    category: "Site Institucional",
    image: clinica,
    domain: "clinica.com.br",
  },
  {
    slug: "hotel-patudo",
    name: "Hotel Patudo",
    category: "Site Institucional",
    image: hotelPatudo,
    domain: "hotelpatudo.com.br",
  },
  {
    slug: "english-with-mih",
    name: "English with Mih",
    category: "Plataforma Educacional",
    image: englishWithMih,
    domain: "englishwithmih.com",
  },
  {
    slug: "arquitetura",
    name: "Arquitetura",
    category: "Site Institucional",
    image: arquitetura,
    domain: "estudioarq.com.br",
  },
  {
    slug: "academia",
    name: "Academia",
    category: "Landing Page",
    image: academia,
    domain: "academia.com.br",
  },
];
