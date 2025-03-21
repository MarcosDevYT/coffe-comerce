import { Cake, Coffee, UtensilsCrossed } from "lucide-react";

export const navLinks = [
  {
    Texto: "Inicio",
    Link: "inicio",
  },
  {
    Texto: "Nosotros",
    Link: "nosotros",
  },
  {
    Texto: "Productos",
    Link: "productos",
  },
  {
    Texto: "Testimonios",
    Link: "testimonios",
  },
];

export const exploreData = [
  {
    Titulo: "Catering Personalizado",
    Icon: <UtensilsCrossed size={75} className="mx-auto" />,
    Descripcion:
      "Sorprende a tus invitados con el sabor y aroma del mejor café a tus eventos.",
    Boton: "Ver Servicios",
  },
  {
    Titulo: "Menú de Sabores",
    Icon: <Coffee size={75} className="mx-auto" />,
    Descripcion:
      "Explora una variedad de sabores y mezclas seleccionadas para satisfacer tus gustos.",
    Boton: "Explorar Menú",
  },
  {
    Titulo: "Servicios Especiales",
    Icon: <Cake size={75} className="mx-auto" />,
    Descripcion:
      "Desde eventos corporativos hasta reuniones íntimas, nos adaptamos a tus necesidades.",
    Boton: "Conoce Más",
  },
];

export const cafeProducts = [
  {
    Nombre: "Espresso Intenso",
    Precio: "$2.50",
    src: "/coffee/mid1.png",
    Descripcion:
      "Perfecto para quienes buscan una explosión de sabor en cada sorbo.",
  },
  {
    Nombre: "Latte Cremoso",
    Precio: "$4.50",
    src: "/coffee/mid2.png",
    Descripcion:
      "Una mezcla suave y cremosa, ideal para cualquier momento del día.",
  },
  {
    Nombre: "Mocha Dulce",
    Precio: "$3.50",
    src: "/coffee/mid3.png",
    Descripcion:
      " Con un toque de chocolate, el Mocha Dulce es el equilibrio perfecto entre sabor y dulzura.",
  },
];

export const testimonialData = [
  {
    Nombre: "Marcos M.",
    Imagen: "/coffee/man.png",
    Puntaje: "★★★★★",
    Testimonio:
      "El mejor café que he probado en mucho tiempo. La entrega fue rápida y el sabor increíble.",
  },
  {
    Nombre: "Olivia Z.",
    Imagen: "/coffee/girl2.png",
    Puntaje: "★★★★☆",
    Testimonio:
      "Excelente servicio, el sabor del Mocha es fenomenal. Repetiré sin dudas.",
  },
  {
    Nombre: "Maria E.",
    Imagen: "/coffee/girl1.png",
    Puntaje: "★★★★★",
    Testimonio:
      "El catering fue perfecto para mi evento. Todos quedaron fascinados con los sabores y el lugar.",
  },
];

export const peopleTooltip = [
  {
    id: 1,
    name: "John Doe",
    designation: "★★★★★",
    image: "/cara1.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "★★★★☆",
    image: "/cara2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "★★★★★",
    image: "/coffee/girl1.png",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "★★★★☆",
    image: "/cara3.jpg",
  },
  {
    id: 7,
    name: "Joseph Field",
    designation: "★★★★★",
    image: "/cara4.jpg",
  },
];
