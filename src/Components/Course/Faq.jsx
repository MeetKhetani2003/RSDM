/* eslint-disable no-irregular-whitespace */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import React from 'react';

const faqItems = [
  {
    question: '1 What digital marketing courses do you offer?',
    answer:
      'List your courses, specializations, and any beginner/advanced levels. Link to course pages for details.',
  },
  {
    question: '2 What are the prerequisites for your courses?',
    answer:
      'pecify any required educational background, technical skills, or prior experience.',
  },
  {
    question: '3.	What is the duration of your courses?',
    answer:
      'Clearly state the length of each course, including online/offline formats and any flexible scheduling options.',
  },
  {
    question: '4.	What are the fees for your courses?',
    answer:
      'Provide a clear fee structure for each course, including payment plans, discounts, or financial aid options.  Consider linking to a fee schedule page.',
  },
  {
    question: '5.	Do you offer online or in-person classes, or both?',
    answer:
      'Specify the available learning formats and highlight the benefits of each.',
  },
  {
    question: '6.	Do you provide placement assistance after course completion?',
    answer:
      'Detail your placement support, including career counseling, resume building, interview preparation, and connections with potential employers.  Be realistic and transparent about placement rates.',
  },
  {
    question:
      '7.	What are the career opportunities after completing a digital marketing course? ',
    answer:
      'List potential job roles like SEO Specialist, Social Media Manager, Content Marketer, etc., and mention industry demand.',
  },
  {
    question:
      '8.	What is the average salary one can expect after completing a digital marketing course? ',
    answer:
      "While you can't guarantee salaries, provide realistic salary ranges based on industry data and experience levels.  Avoid misleading promises.",
  },
  {
    question:
      '9. What are the qualifications and experience of your instructors?',
    answer:
      "Showcase your instructors' expertise and credentials to build trust and credibility.",
  },
  {
    question:
      '10.	What makes your digital marketing institute different from others? ',
    answer:
      ' Highlight your unique selling points, such as specialized curriculum, practical training, industry partnerships, or alumni network.',
  },
  {
    question:
      '11.	 How do your courses prepare students for the latest trends in digital marketing, such as AI, automation, and evolving platform algorithms?',
    answer: `This is essential right now.  Explain how your curriculum stays current.  Mention specific modules, guest lectures from industry experts, case studies on recent campaigns, or hands-on experience with relevant tools.  Emphasize your focus on adapting to the rapidly changing digital landscape.  For example: "Our curriculum is constantly updated to reflect the latest advancements. We incorporate modules on AI-driven marketing tools, marketing automation strategies, and the impact of algorithm updates on SEO and social media.  We also invite guest speakers from leading agencies to share their insights on emerging trends."  This demonstrates your institute's commitment to providing cutting-edge education.`,
  },
];

const FaqItem = ({ question, answer }) => (
  <AccordionItem value={question}>
    <AccordionTrigger className='py-4 px-6 text-lg font-semibold bg-blue-100 dark:bg-blue-800 rounded-lg shadow-md hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors'>
      {question}
    </AccordionTrigger>
    <AccordionContent className='p-6 text-base bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
      {answer}
    </AccordionContent>
  </AccordionItem>
);

export function Faq({ items = faqItems }) {
  return (
    <div className='py-8 px-4'>
      <h1 className='text-center text-4xl font-semibold font-openSans my-8'>
        Frequently Asked Questions
      </h1>
      <Accordion
        type='single'
        collapsible
        className='w-full max-w-7xl mx-auto space-y-4'
      >
        {items.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </Accordion>
    </div>
  );
}
