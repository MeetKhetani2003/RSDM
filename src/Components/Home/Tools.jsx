import React from 'react';

import { assets } from '@/assets/assetimports';

const Tools = () => {
  return (
    <div>
      <div className='leading-10'>
        <h1 className='w-full mx-auto text-blue-950 text-center font-semibold font-dmSans mt-10 text-4xl'>
          Master digital marketing tools like...
        </h1>
        <p className='font-monsterate text-center mb-10'>
          Make Complex Things Easier Or Analyze Your Competitors Strategy By
          Mastering 50+{' '}
          <span className='font-semibold'>Digital Marketing Tools</span> (Free &
          Paid){' '}
        </p>
      </div>
      <div className='max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-8 gap-4'>
        {[
          { img: assets.mt1, alt: 'mt1' },
          { img: assets.mt2, alt: 'mt2' },
          { img: assets.mt3, alt: 'mt3' },
          { img: assets.mt4, alt: 'mt4' },
          { img: assets.mt5, alt: 'mt5' },
          { img: assets.mt6, alt: 'mt6' },
          { img: assets.mt7, alt: 'mt7' },
          { img: assets.mt8, alt: 'mt8' },
          { img: assets.mt9, alt: 'mt9' },
          { img: assets.mt10, alt: 'mt10' },
          { img: assets.mt11, alt: 'mt11' },
          { img: assets.mt12, alt: 'mt12' },
          { img: assets.mt13, alt: 'mt13' },
          { img: assets.mt14, alt: 'mt14' },
          { img: assets.mt15, alt: 'mt15' },
          { img: assets.mt16, alt: 'mt16' },
          { img: assets.mt17, alt: 'mt17' },
          { img: assets.mt18, alt: 'mt18' },
          { img: assets.mt19, alt: 'mt19' },
          { img: assets.mt20, alt: 'mt20' },
          { img: assets.mt21, alt: 'mt21' },
          { img: assets.mt22, alt: 'mt22' },
          { img: assets.mt23, alt: 'mt23' },
          { img: assets.mt24, alt: 'mt24' },
        ].map((item, i) => (
          <div key={i} className='flex flex-col items-center'>
            <img className=' w-32 object-cover' src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
