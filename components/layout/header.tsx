"use client";

import { navLinks } from "@/data";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, ShoppingBag, X } from "lucide-react";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setActive(false);
      } else {
        if (direction > 0) {
          setActive(true);
        }
      }
    }
  });

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 70; // Ajusta según la altura de tu header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`
          fixed md:left-0 w-3/4 h-full z-20 px-6 py-6 gap-4 flex flex-col bg-lightgray-100 transition-all
          md:w-full md:h-[70px] md:flex-row md:justify-between md:py-0 md:items-center md:gap-0
          ${active ? "md:shadow-xl" : ""}
          ${toggle ? "right-0" : "-right-full"}
          `}
      >
        <Link className="font-bold text-xl" href={"/"}>
          Olivia&apos;s Coffee
        </Link>

        <nav className="flex flex-col md:flex-row gap-8 md:items-center relative">
          <div
            onClick={handleToggle}
            className="md:hidden absolute -top-[3.3rem] -right-4 p-2 rounded-full bg-lightgray-100 shadow-lg shadow-lightgray-200"
          >
            <X className="cursor-pointer" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            {navLinks.map((item, index) => {
              return (
                <div key={index}>
                  <span
                    className="cursor-pointer text-base font-medium"
                    onClick={() => scrollToSection(item.Link)}
                  >
                    {item.Texto}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
            <button className="p-2 rounded-full shadow-lg shadow-lightgray-200">
              <ShoppingBag strokeWidth={2} />
            </button>
            <Button className="p-4 py-5 rounded-full shadow-lg text-lg font-normal hover:scale-105 transition-all tracking-wide">
              Descarga la App
            </Button>
          </div>
        </nav>
      </header>
      <div className={`md:hidden fixed right-0 top-4 mx-5 z-10 flex gap-4`}>
        <button className="p-2 rounded-full bg-lightgray-100 shadow-lg shadow-lightgray-200">
          <ShoppingBag strokeWidth={2} />
        </button>
        <div
          onClick={handleToggle}
          className="p-2 bg-lightgray-100 rounded-full shadow-lg shadow-lightgray-200 cursor-pointer"
        >
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
