import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React, { useEffect, useState } from 'react';

import { Card, CardContent } from '../ui/card';

const testimonialsData = Array.from({ length: 12 }).map((_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  review: `This is a dummy review for User ${
    index + 1
  }. They had a fantastic experience!`,
  img: `https://randomuser.me/api/portraits/women/${index + 1}.jpg`, // Random User API for demo
}));

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <div className='relative overflow-hidden max-w-7xl mx-auto py-8'>
      <h2 className='text-4xl font-bold text-center mb-8'>Testimonials</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className='w-full'
      >
        <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300'>
          &#10094;
        </CarouselPrevious>
        <CarouselContent className='flex w-full space-x-4'>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className='flex-none w-full md:w-1/2 lg:w-1/3'
            >
              <div className='p-4'>
                <Card className='w-full shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <CardContent className='flex flex-col items-center justify-center p-6'>
                    <img
                      src={testimonial.img}
                      alt={`Testimonial from ${testimonial.name}`}
                      className='w-16 h-16 rounded-full mb-4'
                    />
                    <h3 className='text-xl font-bold mb-2'>
                      {testimonial.name}
                    </h3>
                    <p className='text-sm text-gray-600 text-center'>
                      {testimonial.review}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300'>
          &#10095;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default Testimonial;
