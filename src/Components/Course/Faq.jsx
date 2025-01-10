import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import React from 'react';

const faqItems = [
  {
    question: '1.	What is this course about, and who is it for?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    question: '2.	What are the prerequisites for enrolling in this course? ',
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    question: '3.	Is this course suitable for beginners?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    question: '4.	What topics and tools are covered in the course?',
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    question:
      '5.	What is the duration of the course, and how much time should I dedicate weekly?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    question:
      '6.	What is the learning format? Are sessions live, recorded, or hybrid?',
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    question: '7.	Does the course include projects or assignments?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    question: '8.	Is the certification verifiable by employers?',
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    question: '9.	Does this course provide job assistance?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    question: '10.	What is the course fee?',
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    question:
      '11.	How can I get help if I have questions or face technical issues?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
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
