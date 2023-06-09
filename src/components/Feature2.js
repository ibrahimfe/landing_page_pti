import React from "react";

import { features } from "../data";

const Feature2 = () => {
  //destructivve features
  const { feature2 } = features;
  //destructivve features2
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <section className="section bg-pink-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-counter lg:gap-x-[30px]">
          <div>
            {/*image*/}
            <div
              className="flex-1 order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-offset="300"
            ></div>
            <img src={image} alt="" />
            {/*text */}
            <div
              className="flex-1 order-1 lg:order-2"
              data-aos="fade-right"
              data-aos-offset="400"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;