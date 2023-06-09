//import React from 'react';

//const Overview = () => {
//  return <div>Overview</div>;
//};

//export default Overview;
import React from 'react';
import {overview} from '../data';

const Overview = ()=> {
    const {productImg} = overview;
    return(
        <section className='lg:min-h-[712px]bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
            <div className='container mx-auto flex justfify-end overlow-hidden'>
                <img src={productImg} alt='' data-aos='fade-up' data-aos-offset='300'/>
            </div>

        </section>
    );
};
export default Overview;
