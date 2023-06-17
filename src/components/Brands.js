import React from "react";
import { overview } from "../data";

const Brands = () => {
  const brands = overview.brands;
  return (
    <section className="py-9">
      <div className="container mx-auto flex flex-wrap flex-row items-center justify-center lg:justify-between space-y-6 space-x-10">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="w-[150px]"
            data-aos="fade-up"
            data-aos-delay={brand.delay}
          >
            <img src={brand.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
