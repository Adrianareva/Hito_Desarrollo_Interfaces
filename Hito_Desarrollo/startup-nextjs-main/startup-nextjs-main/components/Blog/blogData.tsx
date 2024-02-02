import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Comentario sobre un tutorial de Python",
    paragraph:
      "“¡Excelente tutorial! Me encantó cómo explicaste los conceptos básicos de Python. La parte sobre bucles for fue especialmente útil para mí. ¡Gracias por compartir!",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Comentario en un artículo sobre algoritmos",
    paragraph:
      "“Interesante artículo sobre algoritmos de búsqueda. Me gustaría ver más ejemplos prácticos y cómo aplicarlos en proyectos reales. ¡Sigan así!”",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Comentario en una entrada sobre desarrollo web",
    paragraph:
      "Me gustaría saber más sobre frameworks front-end como React o Vue.js. ¿Podrían escribir un artículo comparativo? ¡Gracias!",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
