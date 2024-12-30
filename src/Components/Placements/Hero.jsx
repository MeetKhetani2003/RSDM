import React from 'react';

import { assets } from '@/assets/assetimports';

const Hero = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='max-h-[80vh] w-full relative'>
        <video
          src={assets.bgVid}
          className='w-full h-full object-cover'
          autoPlay
          loop
          muted
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-white space-y-4'>
            <h1 className='text-4xl md:text-4xl font-bold'>
              Rajkot School of Digital Marketing
            </h1>
            <p className='text-lg md:text-3xl'>
              70% Top Digital Marketing agency&apos;s senior Digital Marketers
              belongs to RSDM.
            </p>
            <p>
              7000+ Placement Delivered | 100+ Active Placement Partners | 3
              Layer Placement Process
            </p>
            <button className='mt-4 bg-blue-200 hover:bg-blue-400 text-blue-600 font-monsterate py-2 px-4 rounded-md hover:shadow-md hover:shadow-blue-900 hover:text-white transition duration-200'>
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
