import React from "react";
import TextContent from "../ui/textContent";
import { exploreData } from "@/data";
import { Button } from "../ui/button";

const ExploreSection = () => {
  return (
    <section className="py-12" id="nosotros">
      <div className="container w-full md:w-10/12 mx-auto grid grid-cols-1 place-items-center text-center gap-8 px-4 min-h-[80vh]">
        <article className="place-content-center flex flex-col gap-2 items-center">
          <TextContent
            title="Explora lo que tenemos para ti"
            content="Descubre nuestros servicios y sabores únicos pensados para brindarte
          una experiencia de café inolvidable."
            className="w-full md:w-4/6"
          />
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {exploreData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-4 pb-6 w-[16.5rem] h-[19rem] shadow-lg rounded-md text-start"
              >
                <div>
                  <h3 className="font-bold text-lg">{item.Titulo}</h3>{" "}
                  <p className="text-sm text-lightgray-700">
                    {item.Descripcion}
                  </p>
                </div>
                {item.Icon}
                <Button className="w-10/12 place-self-center">
                  {item.Boton}
                </Button>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default ExploreSection;
