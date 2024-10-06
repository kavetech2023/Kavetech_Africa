import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      toast.error('Failed to send message. Please try again.');
    });
  };

  return (
    <div id='contact' className="bg-gradient-to-b from-gray-50 to-purple-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Let's Connect
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ready to elevate your business with AI-powered solutions? We're just a message away.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-2xl rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} action="https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                ></textarea>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8 bg-white shadow-2xl rounded-lg p-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
              <dl className="mt-4 text-base text-gray-500">
                <div className="mt-4 flex items-center">
                  <dt className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-purple-400" aria-hidden="true" />
                  </dt>
                  <dd className="ml-3">+254 798 566 564</dd>
                </div>
                <div className="mt-4 flex items-center">
                  <dt className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-400" aria-hidden="true" />
                  </dt>
                  <dd className="ml-3">contact@kavetechafrica.com</dd>
                </div>
                <div className="mt-4 flex items-center">
                  <dt className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-400" aria-hidden="true" />
                  </dt>
                  <dd className="ml-3">Runda, Nairobi, Kenya</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Office Hours</h3>
              <dl className="mt-4 text-base text-gray-500">
                <div className="mt-2">
                  <dt className="font-semibold">Monday - Friday</dt>
                  <dd>9:00 AM - 6:00 PM EAT</dd>
                </div>
                <div className="mt-2">
                  <dt className="font-semibold">Saturday</dt>
                  <dd>10:00 AM - 2:00 PM EAT</dd>
                </div>
                <div className="mt-2">
                  <dt className="font-semibold">Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;