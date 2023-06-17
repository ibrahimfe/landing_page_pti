import React, { useState } from "react";
// import Product from "./Product";
//import data
import { product } from "../data";
//import images
import ArrowImg from "../assets/img/product/cards/arrow.svg";

const Cards = () => {
  // index state
  const [index, setIndex] = useState(1);
  //destruvture product data
  const { cards } = product;
  return (
    <section className="">
      {/* cards */}
      <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px">
        {cards.map((card, cardIndex) => {
          //destructure card
          const { icon, title, subtitle, delay } = card;
          return (
            <div
              key={cardIndex}
              data-aos="zoom-out"
              data-aos-offset="100"
              data-aos-delay={delay}
            >
              <div
                oneClick={() => setIndex(cardIndex)}
                className={`${
                  index === cardIndex && "bg-white shadow-2x1"
                } w-[350px h-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px]cursor-pointer transition-all`}
              >
                {/* card icon */}
                {/* card */}
                <div className="mb-6">
                  <img src={icon} alt="" />
                </div>
                {/* card title */}
                <div className="mb-3 text-[30px] font-medium">{title}</div>
                {/* card subtitle */}
                <p className="mb-6 text-light">{subtitle}</p>
                {/* arrow img */}
                {index === cardIndex && <img src={ArrowImg} alt="" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Cards;
