import React from 'react';
import { GoQuestion } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

import { assets } from '@/assets/assetimports';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import DialogForm from './DialogForm';

const AboutCourse = () => {
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
            Best Digital Marketing Course in Rajkot At RSDM, we offer a
            cutting-edge digital marketing course designed to cater to students,
            working professionals, and entrepreneurs alike. Our curriculum is
            meticulously crafted to provide in-depth knowledge of SEO, social
            media marketing, Google Ads, content marketing, and more. For
            students, it’s a gateway to building a high-demand career in the
            digital world. Working professionals can elevate their skills, boost
            job prospects, or transition into new roles. Entrepreneurs, on the
            other hand, gain the expertise to promote their businesses, reach
            wider audiences, and achieve measurable growth in the competitive
            online market.
          </p>
          <p>
            Scope and Benefits of Digital Marketing The digital marketing
            industry is booming, with businesses of all sizes relying on online
            platforms to reach customers. This course empowers you with
            practical skills and industry-relevant knowledge to excel in this
            dynamic field. With our guidance, you’ll gain proficiency in
            leveraging the latest tools and strategies, ensuring you stand out
            in your endeavors. Whether it’s securing a well-paying job,
            launching successful ad campaigns, or scaling your business, our
            course equips you to achieve your goals confidently and efficiently.
          </p>
          <div className='flex gap-7 items-center'>
            <button
              onClick={() => navigate('/courses')}
              className='w-full bg-blue-950 text-white py-3 rounded-md text-lg hover:text-blue-900 hover:bg-blue-100 transition-all duration-300'
            >
              Learn More
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className='w-full hover:text-blue-100 hover:bg-blue-950 bg-blue-100 text-blue-950 py-3 rounded-md text-lg  transition-all duration-300'>
                  Inquire Now
                </button>
              </DialogTrigger>
              <DialogContent className='bg-white rounded-lg p-4 mt-10 max-w-md mx-auto'>
                <DialogForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
