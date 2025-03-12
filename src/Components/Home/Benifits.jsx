import React from 'react';

import { assets } from '@/assets/assetimports';

import { CardComponent, StatCard } from '../Course/AboutDigital';
import { Button } from '../ui/button';

const Benefits = () => {
  return (
    <div className='bg-white py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold leading-snug text-blue-950 text-center my-7 md:my-14'>
          Benefit With RSDM
        </h1>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-8'>
          <div className='w-full'>
            {/* <p className='text-gray-500 my-4 text-center'>
              Explore top digital marketing courses online. Learn about fees,
              costs, and best classes for internet marketing careers. Enroll
              today!
            </p> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
              {/* <CardComponent
                title={'Global Reach'}
                content={
                  'Digital marketing allows you to reach a global audience, breaking geographical barriers and enabling you to expand your market presence beyond local boundaries.'
                }
              /> */}
              <CardComponent
                title={'Cost-Effective'}
                content={
                  'Compared to traditional marketing methods, digital marketing is more affordable. It provides better value for your investment, especially for small and medium-sized businesses.'
                }
              />
              {/* <CardComponent
                title={'Measurable Results'}
                content={
                  'Digital marketing offers real-time analytics, allowing you to track the performance of your campaigns. This helps in making data-driven decisions and improving strategies.'
                }
              /> */}
              <CardComponent
                title={'Targeted Audience'}
                content={
                  'With digital marketing, you can reach a highly specific audience based on demographics, interests, and behaviors, ensuring that your message is delivered to the most relevant people.'
                }
              />
              <CardComponent
                title={'Increased Engagement'}
                content={
                  'Through social media, email marketing, and content marketing, digital platforms allow for direct interaction with your audience, fostering a stronger relationship and increasing brand loyalty.'
                }
              />
              <CardComponent
                title={'Higher Conversion Rates'}
                content={
                  'With tailored campaigns and optimized landing pages, digital marketing can significantly improve conversion rates compared to traditional marketing methods.'
                }
              />
              {/* <CardComponent
                title={'24/7 Availability'}
                content={
                  'Digital marketing allows you to run campaigns around the clock, meaning your business can reach potential customers anytime, increasing the chances of generating leads.'
                }
              /> */}
              {/* <CardComponent
                title={'Flexibility and Scalability'}
                content={
                  'Digital campaigns can be easily adjusted, scaled, or optimized based on performance, helping you adapt quickly to market changes or business needs.'
                }
              /> */}
              <CardComponent
                title={'Brand Awareness'}
                content={
                  'Consistent online presence through social media, SEO, and online ads helps in increasing visibility and brand recognition among potential customers.'
                }
              />
              <CardComponent
                title={'Improved Customer Insights'}
                content={
                  'Digital marketing provides valuable data on customer behavior, preferences, and needs, enabling businesses to refine their offerings and enhance customer experience.'
                }
              />
            </div>
          </div>
        </div>
        {/* <div className='flex flex-col md:flex-row gap-6 py-8'>
          <StatCard
            IconComponent={FcBriefcase}
            count={200}
            suffix='+'
            description='Hiring Partners'
          />
          <StatCard
            color={'text-blue-500'}
            IconComponent={TbMobiledata}
            count={1000}
            suffix='+'
            description='Career Transitions'
          />
          <StatCard
            IconComponent={FcMoneyTransfer}
            count={5}
            suffix='LPA'
            description='Highest Package'
          />
        </div> */}
      </div>
    </div>
  );
};

export default Benefits;
