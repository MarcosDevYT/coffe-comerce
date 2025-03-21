"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <section className="py-6 pt-12 md:pt-20" id="inicio">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="mx-auto">
            <article className="container cursor-default mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 px-4 min-h-[90vh]">
              {/* Texts/Buttons */}

              <div className="order-last mx-auto md:order-first grid place-content-start">
                <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] xl:text-[7.1vw] font-bold mb-5 tracking-wide">
                  Olivia’s Coffee Boutique
                </h1>
                <p className="text-base pl-2 md:text-lg">
                  Disfruta una bebida de nuestra selección &apos;Olivia’s
                  Bottled Brews&apos; o prueba uno de nuestros exquisitos cafés
                  artesanales, hechos con pasión para ti.
                </p>
                <div className="flex flex-wrap gap-4 py-6">
                  <Button className="p-6 rounded-full shadow-lg text-lg font-normal bg-blackdark-950 hover:bg-blackdark-950 hover:scale-105 transition-all tracking-wide">
                    Descargar App
                  </Button>
                  <Button
                    className="p-6 rounded-full text-lg font-normal shadow-lg hover:scale-105 transition-all tracking-wide"
                    variant="outline"
                  >
                    Comprar Cafe
                  </Button>
                </div>
              </div>
              <Image
                className="w-full h-[45vh] md:h-[70vh] mx-auto object-contain"
                alt=""
                src={"/coffee/hero.png"}
                width={800}
                height={800}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <article className="container cursor-default mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 px-4 min-h-[90vh]">
              {/* Texts/Buttons */}

              <div className="order-last md:order-first grid place-content-start">
                <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] xl:text-[7.1vw] font-bold mb-5 tracking-wide">
                  Olivia’s Coffee Boutique
                </h1>
                <p className="text-base pl-2 md:text-lg">
                  Disfruta una bebida de nuestra selección &apos;Olivia’s
                  Bottled Brews&apos; o prueba uno de nuestros exquisitos cafés
                  artesanales, hechos con pasión para ti.
                </p>
                <div className="flex flex-wrap gap-4 py-6">
                  <Button className="p-6 rounded-full shadow-lg text-lg font-normal hover:scale-105 transition-all tracking-wide">
                    Descargar App
                  </Button>
                  <Button
                    className="p-6 rounded-full text-lg font-normal shadow-lg hover:scale-105 transition-all tracking-wide"
                    variant="outline"
                  >
                    Comprar Cafe
                  </Button>
                </div>
              </div>
              <Image
                className="w-full h-[45vh] md:h-[70vh] mx-auto object-contain"
                alt=""
                src={"/coffee/coffee-mid.png"}
                width={1000}
                height={1000}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <article className="container cursor-default mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 px-4 min-h-[90vh]">
              {/* Texts/Buttons */}

              <div className="order-last md:order-first grid place-content-start">
                <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] xl:text-[7.1vw] font-bold mb-5 tracking-wide">
                  Olivia’s Coffee Boutique
                </h1>
                <p className="text-base pl-2 md:text-lg">
                  Disfruta una bebida de nuestra selección &apos;Olivia’s
                  Bottled Brews&apos; o prueba uno de nuestros exquisitos cafés
                  artesanales, hechos con pasión para ti.
                </p>
                <div className="flex flex-wrap gap-4 py-6">
                  <Button className="p-6 rounded-full shadow-lg text-lg font-normal hover:scale-105 transition-all tracking-wide">
                    Descargar App
                  </Button>
                  <Button
                    className="p-6 rounded-full text-lg font-normal shadow-lg hover:scale-105 transition-all tracking-wide"
                    variant="outline"
                  >
                    Comprar Cafe
                  </Button>
                </div>
              </div>
              <Image
                className="w-full h-[45vh] md:h-[70vh] mx-auto object-contain"
                alt=""
                src={"/coffee/man-holding.png"}
                width={1000}
                height={1000}
              />
            </article>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HeroSection;
