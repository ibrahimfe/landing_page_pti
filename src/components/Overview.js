import React from "react";
import { overview } from "../data";

const Overview = () => {
  const { productImg } = overview;
  return (
    <section className="min-h-[400px] lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]">
      <div className="container mx-auto flex justfify-end overlow-hidden">
        <img src={productImg} alt="" data-aos="fade-up" data-aos-delay="200" />
      </div>
    </section>
  );
};
export default Overview;
