import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import React from 'react';

const faqItems = [
  {
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    question: 'Is it styled?',
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    question: 'Is it animated?',
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
