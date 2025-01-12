import React, { useState } from 'react';
import { GoQuestion } from 'react-icons/go';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';

import { assets } from '@/assets/assetimports';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import DialogForm from './DialogForm';

const AboutCourse = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='w-full mx-auto text-center font-semibold font-dmSans my-10 text-4xl'>
        About Our Course
      </h1>
      <div className='max-w-7xl gap-8 mx-auto flex flex-col px-4 md:flex-row items-center'>
        <div className='flex-1'>
          <img height={1000} src={assets.digital2} alt='d2' />
        </div>
        <div className='font-monsterate text-gray-600 text-wrap text-justify space-y-4 md:w-1/2 text-base font-medium'>
          <p>
            {`RSDM offers Rajkot's best digital marketing course, empowering
            students, professionals, and entrepreneurs to thrive in today's
            booming digital landscape. Our cutting-edge curriculum provides
            in-depth training in SEO, social media marketing, Google Ads,
            content marketing, and more, equipping students for high-demand
            careers, professionals for career advancement, and entrepreneurs for
            measurable business growth. Gain practical skills and
            industry-relevant knowledge to confidently launch successful
            campaigns, scale businesses, or secure well-paying jobs in
            this dynamic field.`}
          </p>
          <p className='flex items-start justify-between md:flex-row flex-col'>
            <ul>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Students And fresh Graduates
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Working Professionals
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Job Seekers
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Entrepreneurs and startups
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Corporate Teams
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Home Entrepreneur
              </li>
            </ul>
            <ul>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Freelancer
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Beginners Learnngs for intrest
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Educational Institutes
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                NGOs And Special Organizations
              </li>
              <li className='flex items-center gap-3'>
                <TfiArrowCircleRight />
                Influencers And Bloggers
              </li>
            </ul>
          </p>
          <div className='flex gap-7 items-center'>
            <button
              onClick={() => navigate('/courses')}
              className='w-full bg-blue-950 text-white py-3 rounded-md text-lg hover:text-blue-900 hover:bg-blue-100 transition-all duration-300'
            >
              Learn More
            </button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className='w-full hover:text-blue-100 hover:bg-blue-950 bg-blue-100 text-blue-950 py-3 rounded-md text-lg transition-all duration-300'>
                  Inquire Now
                </button>
              </DialogTrigger>
              <DialogContent className='bg-white rounded-lg p-4 mt-10 max-w-md mx-auto'>
                <DialogForm
                  closeDialog={handleCloseDialog}
                  from={'About-Home'}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
