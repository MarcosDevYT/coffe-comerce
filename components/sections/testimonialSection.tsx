"use client";

import React from "react";
import TextContent from "../ui/textContent";
import { peopleTooltip, testimonialData } from "@/data";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="py-12" id="testimonios">
      <div className="container w-full md:w-10/12 mx-auto grid grid-cols-1 place-content-center place-items-center text-center gap-8 px-4 min-h-[80vh]">
        <article className="place-content-center flex flex-col gap-2 items-center">
          <TextContent
            title="Lo que opinan nuestros clientes"
            content="Descubre nuestras mezclas más apreciadas por su sabor y calidad.
            Cada café está elaborado con los mejores granos y pensado para
            quienes buscan una experiencia única en cada taza."
            className="w-full md:w-3/6"
          />
          <div className="flex my-10">
            <div className=" flex flex-row items-center justify-center pr-8 w-max">
              <AnimatedTooltip items={peopleTooltip} />
            </div>
            <div className="text-start border-l-4 border-black pl-5">
              <h4 className="font-bold text-lg">4.6 ☆</h4>
              <p>24k votos en Google</p>
            </div>
          </div>
        </article>
        <article className="flex flex-row flex-wrap gap-4">
          {testimonialData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col p-4 pb-6 w-[16.5rem] shadow-lg rounded-md text-start"
              >
                <Image
                  width={150}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-lg bg-gray-200"
                  alt={item.Nombre}
                  src={item.Imagen}
                />
                <div>
                  <h3 className="mt-4 flex gap-5 w-full font-bold text-lg h-12">
                    {item.Nombre}{" "}
                    <span className="text-yellow-300 ">{item.Puntaje}</span>
                  </h3>
                  <p className="text-sm text-lightgray-700">
                    {item.Testimonio}
                  </p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default TestimonialSection;
