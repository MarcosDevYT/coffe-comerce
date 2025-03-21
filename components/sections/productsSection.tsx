import { cafeProducts } from "@/data";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import TextContent from "../ui/textContent";

const ProductsSection = () => {
  return (
    <section className="py-12" id="productos">
      <div className="container w-full md:w-10/12 mx-auto grid grid-cols-1 place-items-center text-center place-content-center gap-8 px-4 min-h-[80vh]">
        <article className="place-content-center flex flex-col gap-2 items-center">
          <TextContent
            title="Nuestros Cafés Más Populares"
            content="Descubre nuestras mezclas más apreciadas por su sabor y calidad.
            Cada café está elaborado con los mejores granos y pensado para
            quienes buscan una experiencia única en cada taza."
            className="w-full md:w-3/6"
          />
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cafeProducts.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-4 pb-6 w-[16.5rem] h-[25.5rem] shadow-lg rounded-md text-start"
              >
                <div>
                  <h3 className="font-bold text-lg">{item.Nombre}</h3>{" "}
                  <p className="text-sm text-lightgray-700">
                    {item.Descripcion}
                  </p>
                </div>
                <Image
                  width={150}
                  height={200}
                  className="mx-auto h-[200px] object-cover rounded-lg"
                  alt={item.Nombre}
                  src={item.src}
                />
                <Button className="w-10/12 place-self-center">
                  Añadir al carrito
                </Button>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default ProductsSection;
