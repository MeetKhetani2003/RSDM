import React from 'react';

import { assets } from '@/assets/assetimports';

import { Button } from '../ui/button';

const AboutCourse = () => {
  return (
    <div>
      <h1 className='w-full mx-auto text-center font-semibold font-dmSans my-10 text-4xl'>
        About Our Course
      </h1>
      <div className='max-w-7xl gap-8 mx-auto flex flex-col px-4 md:flex-row items-center'>
        <div className='flex-1'>
          <img height={1000} src={assets.digital2} alt='d2' />
        </div>
        <div className='font-monsterate text-gray-600 text-wrap space-y-4 md:w-1/2 text-base font-medium'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            quibusdam cumque consectetur repellendus veritatis, repudiandae
            accusantium perspiciatis ex explicabo tempore alias impedit nam
            pariatur ipsum tempora blanditiis rerum mollitia. Sint optio
            repudiandae maxime minima ullam impedit a numquam unde, quae
            eligendi illo, tempore dolor quis aliquam. Aperiam, veritatis earum.
            Iure.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            quibusdam cumque consectetur repellendus veritatis, repudiandae
            accusantium perspiciatis ex explicabo tempore alias impedit nam
            pariatur ipsum tempora blanditiis rerum mollitia. Sint optio
            repudiandae maxime minima ullam impedit a numquam unde, quae
            eligendi illo, tempore dolor quis aliquam. Aperiam, veritatis earum.
            Iure.
          </p>
          <div className='flex gap-7 items-center'>
            <button className='w-full bg-blue-950 text-white py-3 rounded-md text-lg hover:text-blue-900 hover:bg-blue-100 transition-all duration-300'>
              Learn More
            </button>
            <button className='w-full hover:text-blue-100 hover:bg-blue-950 bg-blue-100 text-blue-950 py-3 rounded-md text-lg  transition-all duration-300'>
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
