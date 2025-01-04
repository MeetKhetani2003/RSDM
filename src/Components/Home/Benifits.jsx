import React from 'react';

import { assets } from '@/assets/assetimports';

import { Button } from '../ui/button';

const Benifits = () => {
  return (
    <div>
      <h1 className='w-full mx-auto text-center font-semibold font-dmSans my-10 text-4xl'>
        Our Benifits
      </h1>
      <div className='max-w-7xl gap-8 mx-auto flex flex-col px-4 md:flex-row items-center'>
        <div className='font-monsterate text-gray-600 text-wrap space-y-4 md:w-1/2 text-base font-medium'>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className='flex-1'>
          <img height={1000} src={assets.digital2} alt='d2' />
        </div>
      </div>
    </div>
  );
};

export default Benifits;
