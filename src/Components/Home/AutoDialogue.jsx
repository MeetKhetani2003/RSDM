import axios from 'axios';
import React, { useState } from 'react';

import { submitForm } from '@/lib/formutil';
import { useToast } from '@/hooks/use-toast';

const AutoDialog = ({ closeDialog }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    inquiryFrom: 'Popup',
  });
  const { toast } = useToast();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      'https://rsdmserver.onrender.com/api/v1/contacts/create',
      formData
    );
    closeDialog();
    toast({
      title: 'Form Submitted Successfully',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6 w-full'>
      <h2 className='text-2xl font-semibold text-gray-800 whitespace-nowrap text-center'>
        Drop Your Inquiry & Get Free Demo Details
      </h2>

      {/* Name Field */}
      <div className='space-y-1'>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          required
          className='block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      {/* Email Field */}
      <div className='space-y-1'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          required
          className='block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      {/* Contact Number Field */}
      <div className='space-y-1'>
        <label
          htmlFor='number'
          className='block text-sm font-medium text-gray-700'
        >
          Contact Number
        </label>
        <input
          type='tel'
          id='number'
          name='number'
          placeholder='Your Contact Number'
          value={formData.number}
          onChange={handleChange}
          required
          className='block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      {/* Submit & Close Buttons */}
      <div className='flex gap-3 justify-between'>
        <button
          type='submit'
          className='w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Submit
        </button>
        <button
          type='button'
          onClick={closeDialog}
          className='w-full px-4 py-2 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default AutoDialog;
