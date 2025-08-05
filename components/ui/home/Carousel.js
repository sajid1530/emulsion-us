"use client";
import React from "react";
import Image from "next/image";

const Carousel = () => {
  const logos = [
    { src: "/images/Logo_IPG.webp", alt: "Company 1 logo" },
    { src: "/images/atarim-white.svg", alt: "Company 2 logo" },
    { src: "/images/republic_power_logo.webp", alt: "Company 3 logo" },
    { src: "/images/alifa.webp", alt: "Company 4 logo" },
    { src: "/images/moodtube_img.webp", alt: "Company 5 logo" },
    { src: "/images/Sprintzeal_Logo.webp", alt: "Company 6 logo" },
    { src: "/images/POPCARD_4.webp", alt: "Company 7 logo" },
    { src: "/images/Bubble.webp", alt: "Company 8 logo" },
    { src: "/images/teadit.webp", alt: "Company 9 logo" },
    { src: "/images/Artis-lab.webp", alt: "Company 10 logo" },
    { src: "/images/crystal_ball.webp", alt: "Company 10 logo" },
    { src: "/images/farmin-white.webp", alt: "Company 10 logo" },
    { src: "/images/jarvis-logo.webp", alt: "Company 10 logo" },
    { src: "/images/logo-black-small.webp", alt: "Company 10 logo" },
    { src: "/images/bai_logo_colored.46fc5d5b219c.svg", alt: "Company 10 logo" },
    { src: "/images/Pensa.webp", alt: "Company 10 logo" },
  ];

  return (
    <section className="py-16" aria-label="Trusted Partners">
      <div className="container mx-auto px-4">
        {/* SEO-enhanced Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-24">
            Trusted by Leading Tech Innovators and Startups
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-32 h-16 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
