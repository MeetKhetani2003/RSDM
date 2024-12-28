import React from 'react';

import { assets } from '@/assets/assetimports';
import BreadcrumbLayout from '@/Components/BreadCrumbLayout';
import Hero from '@/Components/Course/Hero';

const Course = () => {
  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Courses', href: '/courses' },
    { title: 'Digital Marketing' }, // No `href` for the current page
  ];

  const courseDetails = [
    { title: '29 December 2024', subtitle: 'Date of Commencement' },
    { title: '3 Months', subtitle: 'Duration' },
    { title: 'English', subtitle: 'Language' },
    { title: 'Job Assistance', subtitle: 'Program' },
    { title: 'Live + Recorded', subtitle: 'Delivery Mode' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* EMI Information */}
      <div className='max-w-7xl mx-auto pl-7 py-4 font-openSans text-gray-500 text-md font-semibold'>
        <p>EMI options available</p>
      </div>

      {/* Course Details Section */}
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
          {courseDetails.map((item, index) => (
            <div
              key={index}
              className='flex  flex-col md:flex-row justify-evenly items-start md:items-center pb-4 md:pb-0'
            >
              <div className='flex flex-col'>
                <div className='text-2xl font-bold text-gray-800'>
                  {item.title}
                </div>
                <div className='text-sm text-gray-500'>{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
