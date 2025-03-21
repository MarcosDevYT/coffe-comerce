import React from "react";
import { Button } from "../ui/button";
import TextContent from "../ui/textContent";
import Image from "next/image";

const OrderSection = () => {
  return (
    <section className="py-12">
      <div className="container w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center gap-8 px-4 min-h-[80vh]">
        <article>
          <Image
            className="w-full h-[55vh] md:h-[70vh] mx-auto object-contain"
            alt=""
            src={"/coffee/coffee-mid.png"}
            width={500}
            height={500}
          />
        </article>
        <article className="place-content-center flex flex-col gap-3 w-10/12 mx-auto">
          <TextContent
            title="Ordena Tu Sabor Favorito"
            content="No necesitas salir de casa para disfrutar el mejor café. Haz tu pedido
          en línea desde la app o nuestra pagina web y recibe el sabor que amas
          en minutos."
          />
          <Button className="w-max p-6 px-8 rounded-md shadow-lg text-lg font-normal bg-blackdark-950 hover:bg-blackdark-950 hover:scale-105 transition-all tracking-wide">
            Ordenar Ya
          </Button>
        </article>
      </div>
    </section>
  );
};

export default OrderSection;
