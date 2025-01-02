import Freelancers from '@/Components/Placements/Freelancers';
import Hero from '@/Components/Home/Hero';
import RecentPlacement from '@/Components/Placements/RecentPlacement';
import Representitive from '@/Components/Placements/Representitive';
import Stats from '@/Components/Home/Stats';

import AboutCourse from '../../Components/Home/AboutCourse';
import LogoMarquee from '../../Components/Home/Highlights';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Stats /> */}
      <LogoMarquee />
      <AboutCourse />
      <RecentPlacement />
      <Freelancers />
      <Representitive />
    </div>
  );
};

export default Home;
