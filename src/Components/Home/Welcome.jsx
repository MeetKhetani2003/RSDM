/* eslint-disable no-irregular-whitespace */
import React from 'react';

import { assets } from '@/assets/assetimports';

import { Button } from '../ui/button';

const Welcome = () => {
  return (
    <div>
      <h1 className='w-full mx-auto text-center font-semibold font-dmSans my-10 text-4xl'>
        Welcome to RSDM
      </h1>
      <div className='max-w-7xl gap-8 mx-auto flex flex-col px-4 md:flex-row items-center'>
        <div className='font-monsterate text-gray-600 text-wrap text-justify space-y-4 md:w-1/2 text-base font-medium'>
          <p>
            Welcome to RSDM Institute, a premier educational institution
            committed to providing high-quality learning experiences that
            empower individuals and foster professional growth. Since our
            founding in 2025, we have built a reputation for excellence in
            offering programs in digital marketing.
          </p>
          <p>
            At RSDM Institute, we create an environment that encourages
            innovation, hands-on learning, and skill development. Our diverse
            range of courses and certifications cater to students,
            professionals, and organizations looking to stay ahead in a rapidly
            changing world.
          </p>
          <p>
            Our state-of-the-art facilities, expert faculty, and practical
            training opportunities ensure that each student receives the
            knowledge and experience needed to succeed. Whether you’re looking
            to advance your career, start a new profession, or gain specialized
            expertise, RSDM Institute provides the tools and resources to help
            you achieve your goals.
          </p>
          <p>
            Our mission is to deliver accessible, industry-relevant education
            that drives personal growth, enhances skills, and prepares students
            for real-world challenges. Join us at RSDM Institute and take the
            first step toward a brighter, more successful future.
          </p>
          {/* <div className='flex gap-7 items-center'>
            <button className='w-full bg-blue-950 text-white py-3 rounded-md text-lg hover:text-blue-900 hover:bg-blue-100 transition-all duration-300'>
              Learn More
            </button>
            <button className='w-full hover:text-blue-100 hover:bg-blue-950 bg-blue-100 text-blue-950 py-3 rounded-md text-lg  transition-all duration-300'>
              Inquire Now
            </button>
          </div> */}
        </div>
        <div className='flex-1'>
          <img height={1000} src={assets.welcome} alt='d2' />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
