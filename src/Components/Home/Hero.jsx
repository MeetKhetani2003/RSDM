import { useState } from 'react';

import { assets } from '@/assets/assetimports';

import DialogForm from '../Home/DialogForm';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import Stats from './Stats';

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className='bg-[#ecedf1] py-12 relative'>
      <img
        src={assets.bgImg}
        alt='bg'
        className='absolute top-0 left-0 w-full h-full z-0 object-cover'
      />
      {/* Hero Section */}
      <section className='relative z-10 bg-transparent py-8 md:py-6 md:max-h-screen flex flex-col md:flex-row items-center mx-auto overflow-hidden font-openSans'>
        {/* Hero Image (Hidden on mobile) */}
        <img
          src={assets.hero}
          className='w-full hidden -mt-36 md:block md:w-1/2 object-cover md:pt-40'
          alt='hero'
        />
        {/* Hero Content */}
        <div className='px-6 md:px-9 space-y-8 md:w-1/2 md:-ml-10'>
          <h1 className='text-4xl md:text-5xl font-bold text-blue-950 text-center md:text-left'>
            Professional Certification Program in Digital Marketing
          </h1>
          <p className='text-xl md:text-xl font-bold text-center md:text-left'>
            Best Digital Marketing Course in Rajkot for Students, Working
            Professionals, and Entrepreneurs
          </p>
          <div className='bg-gradient-to-b from-white via-white to-gray-100 border border-blue-950 rounded-xl p-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
              <div className='space-y-4 md:w-1/2'>
                <h1 className='text-xl text-gray-500'>Our Course Includes:</h1>
                <ul>
                  {[
                    'Job Placement & Internships',
                    'Live Projects with Experts',
                    '44 Modules, 5+ Certifications',
                    'Affordable Course Fee',
                    'Practical & Live Training',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className='flex font-semibold text-lg items-center space-x-2'
                    >
                      <span className='text-blue-950'>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='space-y-4 md:px-10 md:w-1/2'>
                <p className='text-xl text-blue-800 font-semibold'>
                  40+ Digital Marketing Tools including latest AI Tools
                </p>
                <img src={assets.ai} alt='ai' />
              </div>
            </div>
            <div className='mt-4'>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button className='bg-blue-950 text-white w-full py-4 mt-3 rounded-xl hover:bg-blue-800 transition duration-300'>
                    Inquire Now
                  </button>
                </DialogTrigger>
                <DialogContent className='bg-white rounded-lg p-4 md:mt-10 max-w-md mx-auto'>
                  <DialogForm
                    closeDialog={handleCloseDialog}
                    from={'Hero-Home'}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
      <Stats />
    </div>
  );
};

export default Hero;
