import React from 'react';

import AboutRSDM from '@/Components/AboutUs/AboutRSDM';
import Hero from '@/Components/AboutUs/Hero';
import Journey from '@/Components/AboutUs/Journey';
import OurTeam from '@/Components/AboutUs/OurTeam';

const About = () => {
  const events = [
    {
      type: 'work',
      date: '2011 - present',
      title: 'Creative Director',
      subtitle: 'Miami, FL',
      description: [
        'User Experience, Visual Design, Interaction Design',
        'Creative Direction, User Experience, Visual Design',
      ],
      background: 'rgb(33, 150, 243)',
    },
    {
      type: 'work',
      date: '2010 - 2011',
      title: 'Art Director',
      subtitle: 'San Francisco, CA',
      description: [
        'User Experience, Visual Design, Interaction Design',
        'Creative Direction, User Experience, Visual Design',
      ],
      background: 'rgb(33, 150, 243)',
    },
    {
      type: 'work',
      date: '2008 - 2010',
      title: 'Web Designer',
      subtitle: 'Los Angeles, CA',
      description: [
        'User Experience, Visual Design, Interaction Design',
        'Creative Direction, User Experience, Visual Design',
      ],
      background: 'rgb(33, 150, 243)',
    },
    {
      type: 'work',
      date: '2006 - 2008',
      title: 'Web Designer',
      subtitle: 'San Francisco, CA',
      description: [
        'User Experience, Visual Design, Interaction Design',
        'Creative Direction, User Experience, Visual Design',
      ],
      background: 'rgb(33, 150, 243)',
    },
    {
      type: 'education',
      date: 'April 2013',
      title: 'Content Marketing for Web, Mobile and Social Media',
      subtitle: 'Online Course',
      description: [
        'User Experience, Visual Design, Interaction Design',
        'Creative Direction, User Experience, Visual Design',
      ],
      background: 'rgb(233, 30, 99)',
    },
    {
      type: 'education',
      date: 'November 2012',
      title: 'Agile Development Scrum Master',
      subtitle: 'Certification',
      description: [
        'User Experience, Visual Design, Interaction Design',
        'Creative Direction, User Experience, Visual Design',
      ],
      background: 'rgb(233, 30, 99)',
    },
    {
      type: 'education',
      date: '2002 - 2006',
      title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
      subtitle: 'Bachelor Degree',
      description: [
        'User Experience, Visual Design, Interaction Design',
        'Creative Direction, User Experience, Visual Design',
      ],
      background: 'rgb(233, 30, 99)',
    },
  ];
  return (
    <div>
      <Hero />
      <AboutRSDM />
      <OurTeam />
      <Journey events={events} />
    </div>
  );
};

export default About;
