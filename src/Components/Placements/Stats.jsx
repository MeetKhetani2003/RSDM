import { LucideLaptopMinimalCheck, UsersRound } from 'lucide-react';
import CountUp from 'react-countup';
import { FaBuilding, FaHandshakeAngle, FaUsers } from 'react-icons/fa6';
import { TbUserScreen } from 'react-icons/tb';

import { Card, CardHeader, CardContent } from '../../Components/ui/card';

const StatCard = ({ IconComponent, count, suffix, description }) => {
  return (
    <div className='flex flex-col items-center justify-center  transition-shadow duration-300 text-blue-950 gap-2 py-4  md:gap-1'>
      <p className='text-4xl'>{IconComponent && <IconComponent />}</p>
      <div className='text-center font-quickSand'>
        <h3 className='flex items-center justify-center text-xl font-bold'>
          <span>
            <CountUp end={count} duration={5} />
          </span>
          <span className='ml-1'>{suffix}</span>
        </h3>
      </div>
      <p className='text-base font-medium text-center  whitespace-nowrap'>
        {description}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className=' px-4 py-4 '>
      <div className='max-w-7xl mx-auto grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  border border-blue-400'>
        <StatCard
          IconComponent={FaUsers}
          count={100}
          suffix='%'
          description='Placement Opportunity'
        />
        <StatCard
          IconComponent={LucideLaptopMinimalCheck}
          count={100}
          suffix='%'
          description='Live Freelancing Opportunity'
        />
        <StatCard
          IconComponent={FaBuilding}
          count={40}
          suffix='+'
          description='Experienced Faculty'
        />
        <StatCard
          IconComponent={TbUserScreen}
          count={100}
          suffix='%'
          description='Live & Practical Training'
        />
        <StatCard
          IconComponent={FaHandshakeAngle}
          count={700}
          suffix='+'
          description='Placements Partners'
        />
        <StatCard
          IconComponent={TbUserScreen}
          count={15}
          suffix='+'
          description='Advance Module'
        />
      </div>
    </div>
  );
};

export default Stats;