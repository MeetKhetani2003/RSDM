import React from 'react';

import { Projects } from '@/Components/Home/Projects';
import { useAutoPopup } from '@/lib/use-Auto-Dialog';
import AboutCourse from '@/Components/Home/AboutCourse';
import AutoDialog from '@/Components/Home/AutoDialogue';
import Benifits from '@/Components/Home/Benifits';
import Freelancers from '@/Components/Placements/Freelancers';
import Hero from '@/Components/Home/Hero';
import LogoMarquee from '@/Components/Home/Highlights';
import Opportunity from '@/Components/Home/Opportunity';
import RecentPlacement from '@/Components/Placements/RecentPlacement';
import Representitive from '@/Components/Placements/Representitive';
import Tools from '@/Components/Home/Tools';
import Welcome from '@/Components/Home/Welcome';

const Home = () => {
  const { showDialog, closeDialog } = useAutoPopup();

  return (
    <div>
      <Hero />
      {showDialog && (
        <div className='fixed z-[150] inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-xl w-full'>
            <AutoDialog closeDialog={closeDialog} />
          </div>
        </div>
      )}
      <LogoMarquee />
      <Welcome />
      <AboutCourse />
      <Projects />
      <Benifits />
      <Tools />
      <Opportunity />
      <RecentPlacement />
      <Freelancers />
      <Representitive />
    </div>
  );
};

export default Home;
