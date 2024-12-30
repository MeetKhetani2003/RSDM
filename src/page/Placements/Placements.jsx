import React from 'react';

import { assets } from '@/assets/assetimports';
import Freelancers from '@/Components/Placements/Freelancers';
import Hero from '@/Components/Placements/Hero';
import RecentPlacement from '@/Components/Placements/RecentPlacement';
import Representitive from '@/Components/Placements/Representitive';
import Stats from '@/Components/Placements/Stats';
import Testimonial from '@/Components/Placements/Testimonial';
import TestimonialVideos from '@/Components/Placements/TestimonialVideos';
import TopPlacements from '@/Components/Placements/TopPlacements';

const Placements = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <div className='max-w-7xl mx-auto px-4 my-10'>
        <h1 className='text-4xl font-dmSans text-center font-semibold'>
          Unlock Your Career Potential with RSDM - The Premier Digital Marketing
          Institute in Rajkot
        </h1>
        <p className='text-sm mt-6 font-monsterate text-gray-600 text-wrap'>
          In today&apos;s fast-paced digital era, the demand for skilled digital
          marketers is at an all-time high. As businesses worldwide embrace
          digital transformation, there&apos;s an unprecedented need for
          professionals who can navigate the complexities of online marketing,
          drive growth, and propel brands to success in the digital landscape.
          In this dynamic environment, choosing the right digital marketing
          institute becomes paramount to securing a promising career trajectory.
          Welcome to RSDM – the premier Digital Marketing Institute in Rajkot,
          where we empower individuals with the knowledge, skills, and industry
          insights to thrive in the ever-evolving world of digital marketing.
        </p>
        <p className='text-sm mt-4 font-monsterate text-gray-600 text-wrap'>
          Established with a vision to bridge the gap between academia and
          industry, RSDM stands as a beacon of excellence in digital marketing
          education. With a rich legacy of nurturing talent and shaping futures,
          RSDM has emerged as the preferred destination for aspiring digital
          marketers seeking to carve a niche for themselves in the competitive
          digital arena. Our unwavering commitment to delivering quality
          education, coupled with industry-relevant curriculum and hands-on
          training, sets us apart as a leader in the field of digital marketing
          education.
        </p>
      </div>
      <TopPlacements />
      <RecentPlacement />
      <Freelancers />
      <Representitive />
      <TestimonialVideos />
      <Testimonial />
    </div>
  );
};

export default Placements;
