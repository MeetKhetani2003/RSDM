import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoQuestion } from "react-icons/go";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const BottomBar = () => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add logic to handle form data submission, e.g., API calls.
  };

  return (
    <div className="border-t border-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* Call Now Button */}
        <div className="flex justify-center">
          <Link to={"tel:7801931135"}>
            <button className="flex text-white gap-2 items-center border-r border-white px-2">
              <span className="hidden md:block">
                <MdOutlineCall />
              </span>
              Call Now
            </button>
          </Link>
        </div>

        {/* WhatsApp Message Button */}
        <div className="flex justify-center">
          <Link to={"https://wa.me/7801931135"}>
            <button className="flex text-white gap-2 items-center">
              <span className="hidden md:block">
                <FaWhatsapp />
              </span>
              Leave a WhatsApp Message
            </button>
          </Link>
        </div>

        {/* Inquire Now Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex text-white bg-green-500 px-4 py-2 gap-2 items-center hover:bg-green-700 border-l border-white">
              <span className="hidden md:block">
                <GoQuestion />
              </span>
              Inquire Now
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white rounded-lg p-4 mt-10 max-w-md mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BottomBar;
