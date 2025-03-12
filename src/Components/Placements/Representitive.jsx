import React from 'react';

import { assets } from '@/assets/assetimports';

const Representitive = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 space-y-4 mt-10'>
      <div>
        <h1 className='text-4xl text-blue-950 font-dmSans font-semibold text-center'>
          Our Regular Recruiters(Representative List)
        </h1>
      </div>
      <div>
        <img src={assets.representitive} alt='representitive' />
      </div>
    </div>
  );
};

export default Representitive;
