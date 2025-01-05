import { MapPinHouse } from 'lucide-react';
import React from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiBookCover, GiSpellBook } from 'react-icons/gi';
import { GrCertificate } from 'react-icons/gr';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { MdOutlineAutoMode, MdOutlineContactSupport } from 'react-icons/md';

import { assets } from '@/assets/assetimports';

import { Card, CardContent, CardHeader } from '../ui/card';

export function Projects() {
  const projects = [
    {
      title: 'Latest Updated Course Curriculum',
      icon: <HiArrowTrendingUp />,
    },
    {
      title: '15+ Case Studies and Live Projects',
      icon: <GiSpellBook />,
    },
    {
      title: 'Advanced LMS Training Support',
      icon: <MdOutlineContactSupport />,
    },
    {
      title: 'Experts Sessions and Guest Lectures',
      icon: <FaPeopleGroup />,
    },
    {
      title: 'Globally Recognized Certificates',
      icon: <GrCertificate />,
    },
    {
      title: '100% Placement Assistance',
      icon: <MapPinHouse />,
    },
    {
      title: 'Marketing Automation Tools',
      icon: <MdOutlineAutoMode />,
    },
    {
      title: 'E-books | E-notes | Assignments',
      icon: <GiBookCover />,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <h1 className='text-4xl font-semibold font-openSans text-center my-6'>
        Our Projects
      </h1>
      <section className='flex flex-wrap gap-8 justify-center p-8'>
        {projects.map((benefit, index) => (
          <Card
            key={index}
            className='w-64 h-64 shadow-lg rounded-xl p-6 bg-white transform transition duration-300 hover:scale-105 flex flex-col items-center justify-between'
          >
            <CardHeader className='flex justify-center items-center'>
              {/* Render either SVG or Icon based on the type */}
              {typeof benefit.icon === 'string' ? (
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className='w-16 h-16 p-2 bg-blue-300 rounded-full'
                />
              ) : (
                <div className='flex justify-center items-center w-16 h-16 bg-blue-300 rounded-full'>
                  {React.cloneElement(benefit.icon, { className: 'w-12 h-12' })}
                </div>
              )}
            </CardHeader>
            <CardContent className='text-center font-medium text-xl mt-4'>
              {benefit.title}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
