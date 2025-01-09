import { Projects } from '@/Components/Home/Projects';
import Benifits from '@/Components/Home/Benifits';
import Freelancers from '@/Components/Placements/Freelancers';
import Hero from '@/Components/Home/Hero';
import Opportunity from '@/Components/Home/Opportunity';
import RecentPlacement from '@/Components/Placements/RecentPlacement';
import Representitive from '@/Components/Placements/Representitive';
import Stats from '@/Components/Home/Stats';
import Tools from '@/Components/Home/Tools';
import Welcome from '@/Components/Home/Welcome';

import AboutCourse from '../../Components/Home/AboutCourse';
import LogoMarquee from '../../Components/Home/Highlights';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Stats /> */}
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
