import React from "react";
// import data
import { product } from "../data";
import Cards from "./Cards";

const Product = () => {
    // destructure product data
    const { title, subtitle } = product;
    return (
        <section className="section">
            <div className="container mx-auto">
                <div className="flex flex-col items-center lg:flex-row mb-10 lg:mb-20">
                    <h2
                        className="title"
                        data-aos="fade-up"
                        data-aos-offset="400"
                        data-aos-delay="300"
                    >
                        {title}
                    </h2>
                    <p className="lead lg:max-w-[350px]">{subtitle}</p>
                </div>
                {/*Cards*/}
                <Cards />
            </div>
        </section>
    );
};
export default Product;
