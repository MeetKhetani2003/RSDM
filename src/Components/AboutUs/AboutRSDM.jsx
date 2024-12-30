import React from 'react';

import { assets } from '@/assets/assetimports';

const AboutRSDM = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:my-10'>
      <h1 className='text-center font-semibold text-4xl py-10'>About RSDM</h1>
      <div className='flex md:flex-row flex-col items-center justify-center gap-8'>
        <div className='h-full'>
          <img className='md:w-[200rem]' src={assets.aboutus} alt='ab' />
        </div>
        <div>
          {[
            `Established as a beacon of excellence in the heart of Rajkot, RSDM
          - the Rajkot School of Digital Marketing - stands as a premier
          institute dedicated to shaping the digital marketing leaders of
          tomorrow. With a commitment to delivering top-tier education and
          practical skills, RSDM has earned a reputation as a trusted
          institution for individuals seeking to thrive in the fast-paced world
          of digital marketing.`,
            `At RSDM, we believe in the transformative power of education. That's why our Digital Marketing institute in Rajkot is designed to provide students with a comprehensive learning experience that goes beyond the classroom. From industry-relevant curriculum to hands-on training, we equip our students with the knowledge, skills, and confidence needed to succeed in today's competitive marketplace.`,
            `One of the hallmarks of RSDM is our team of experienced instructors who bring a wealth of real-world expertise to the classroom. Passionate about their craft and dedicated to student success, our instructors go above and beyond to provide personalized guidance, mentorship, and support. With their guidance, students gain invaluable insights into the latest trends, tools, and techniques in digital marketing, ensuring they graduate with the skills needed to excel in their careers.`,
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <p className='text-gray-800 font-monsterate text-sm'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutRSDM;
