import React, { useState } from "react";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Contact Us
      </h2>

      {/* Name Field */}
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {/* Contact Number Field */}
      <div className="space-y-1">
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-gray-700"
        >
          Contact Number
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          placeholder="Your Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          rows="4"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
