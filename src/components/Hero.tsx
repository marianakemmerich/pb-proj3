import React from 'react';
import homeBanner from '../assets/home-banner.png';

const Hero: React.FC = () => {
  return (
    <div
      className='relative overflow-hidden flex items-center bg-cover bg-no-repeat bg-center w-full h-[716px]'
      style={{
        backgroundImage: `url(${homeBanner})`,
      }}
    >
      <div className='bg-lightYellow w-[643px] h-[443px] flex items-center justify-center ml-auto mt-[50px] mr-16'>
        <div className='w-[561px] h-[344px]'>
          <p className='font-poppins font-semibold text-base'>New Arrival</p>
          <h1 className='font-poppins font-bold text-[52px] text-golden'>
            Discover Our <br /> New Collection
          </h1>
          <p className='font-poppins font-medium text-lg text-graphite'>
            Explore now and find the perfect pieces to transform your space and elevate your home.
          </p>
          <button className='bg-golden w-[222px] h-[74px] text-white text-base font-bold uppercase mt-8'>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
