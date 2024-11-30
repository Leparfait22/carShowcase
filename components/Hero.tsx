"use client";

import { log } from "console";
import CustomButton from "./CustomButton";
import Image from "next/image";

export default function Hero() {
  const handleClick = () => {
    document.getElementById("carros")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre, reserve ou alugue um carro — de forma rápida e fácil!{" "}
        </h1>
        <p className="hero__subtitle">
          Simplifique sua experiência de aluguel com nosso processo de reserva
          sem complicações.
        </p>

        <CustomButton
          title="Descobrir Carros"
          handleClick={handleClick}
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill alt="hero" className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
}
