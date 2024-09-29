import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeatureItem = ({ text }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center space-x-2 text-sm text-gray-600"
  >
    <CheckCircle className="h-5 w-5 text-green-500" />
    <span>{text}</span>
  </motion.li>
)

const Hero = () => {
  return (
    <div id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-fixed"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Kavetech{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Africa
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Revolutionizing African businesses with cutting-edge website and web app creation services that automatically boost sales.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 flex justify-center items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 flex justify-center items-center rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition duration-300"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/vkdLST5UkEQ?si=M51DoVBHfXEA1qF0&rel=0&loop=1"
                title="Kavetech Africa Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video border-indigo/400/30 rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 text-lg font-medium text-gray-900">
                Why Choose Kavetech Africa
              </span>
            </div>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureItem text="Cutting-edge AI-powered web solutions" />
            <FeatureItem text="Tailored for African business needs" />
            <FeatureItem text="Automatic sales optimization" />
            <FeatureItem text="Responsive and user-friendly designs" />
            <FeatureItem text="Seamless integration with existing systems" />
            <FeatureItem text="Ongoing support and maintenance" />
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;