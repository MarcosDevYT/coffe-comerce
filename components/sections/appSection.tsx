import React from "react";
import TextContent from "../ui/textContent";
import { Button } from "../ui/button";
import Image from "next/image";

const AppSection = () => {
  return (
    <section className="py-12">
      <div className="container w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center gap-8 px-4 min-h-[80vh]">
        <article className="place-content-center flex flex-col gap-3 w-10/12 mx-auto">
          <TextContent
            title="Cafe al alcance de tu Mano"
            content="Con nuestra aplicación, ordenar tu café favorito nunca fue tan fácil.
          Lleva la experiencia de Olivia’s Café Boutique a la comodidad de tu
          hogar en solo unos clics y disfruta del café que amas donde quieras."
          />
          <Button className="w-max p-6 px-8 rounded-md shadow-lg text-lg font-normal bg-blackdark-950 hover:bg-blackdark-950 hover:scale-105 transition-all tracking-wide">
            Descarga la App
          </Button>
        </article>
        <div className="relative h-[100vh] md:h-[85%]">
          <Image
            className=" mx-auto object-contain shadow-2xl rounded-lg absolute -rotate-[22deg] bottom-2/4 right-[57%] translate-x-2/4 translate-y-2/4"
            alt=""
            src={"/coffee/coffee-banner.png"}
            width={210}
            height={600}
          />
          <Image
            className="mx-auto object-contain shadow-2xl rounded-lg absolute -rotate-[10deg] bottom-2/4 right-[47%] translate-x-2/4 translate-y-2/4"
            alt=""
            src={"/coffee/coffee-banner.png"}
            width={210}
            height={600}
          />
          <Image
            className="mx-auto object-contain shadow-2xl rounded-lg absolute bottom-2/4 right-[38%] translate-x-2/4 translate-y-2/4"
            alt=""
            src={"/coffee/coffee-banner.png"}
            width={210}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
