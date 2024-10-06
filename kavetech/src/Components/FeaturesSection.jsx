import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import demo from '../assets/main.jpg'
import { Link } from 'react-router-dom'


const FeatureItem = ({ text }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center space-x-2 text-gray-700"
  >
    <CheckCircle className="h-5 w-5 text-emerald-500" />
    <span>{text}</span>
  </motion.li>
)



const FeaturesSection = () => {
  return (
    <section id='work' className="py-20 max-w-7xl overflow-hidden mx-auto">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3"/>
                  </filter>
                  <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4a90e2"/>
                    <stop offset="100%" stopColor="#9b59b6"/>
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect width="100%" height="500" fill="#f8f9fa"/>

                {/* Website Frame */}
                <rect x="50" y="50" width="700" height="400" rx="10" ry="10" fill="#ffffff" filter="url(#shadow)">
                  <animate attributeName="height" from="0" to="400" dur="1s" fill="freeze" />
                </rect>

                {/* Header */}
                <rect x="50" y="50" width="700" height="60" rx="10" ry="10" fill="url(#headerGradient)">
                  <animate attributeName="width" from="0" to="700" dur="0.8s" fill="freeze" />
                </rect>
                <circle cx="80" cy="80" r="15" fill="#ffffff">
                  <animate attributeName="r" from="0" to="15" dur="0.5s" begin="0.8s" fill="freeze" />
                </circle>
                <rect x="110" y="70" width="100" height="20" rx="5" ry="5" fill="#ffffff" opacity="0.7">
                  <animate attributeName="width" from="0" to="100" dur="0.5s" begin="1s" fill="freeze" />
                </rect>
                <rect x="220" y="70" width="100" height="20" rx="5" ry="5" fill="#ffffff" opacity="0.7">
                  <animate attributeName="width" from="0" to="100" dur="0.5s" begin="1.2s" fill="freeze" />
                </rect>
                <rect x="330" y="70" width="100" height="20" rx="5" ry="5" fill="#ffffff" opacity="0.7">
                  <animate attributeName="width" from="0" to="100" dur="0.5s" begin="1.4s" fill="freeze" />
                </rect>

                {/* Main Content Area */}
                <rect x="70" y="130" width="400" height="300" rx="5" ry="5" fill="#f1f3f5" filter="url(#shadow)">
                  <animate attributeName="height" from="0" to="300" dur="0.8s" begin="1.6s" fill="freeze" />
                </rect>
                <rect x="90" y="150" width="360" height="20" rx="3" ry="3" fill="#e9ecef">
                  <animate attributeName="width" from="0" to="360" dur="0.6s" begin="2.4s" fill="freeze" />
                </rect>
                <rect x="90" y="180" width="320" height="20" rx="3" ry="3" fill="#e9ecef">
                  <animate attributeName="width" from="0" to="320" dur="0.6s" begin="2.6s" fill="freeze" />
                </rect>
                <rect x="90" y="210" width="280" height="20" rx="3" ry="3" fill="#e9ecef">
                  <animate attributeName="width" from="0" to="280" dur="0.6s" begin="2.8s" fill="freeze" />
                </rect>
                <rect x="90" y="240" width="360" height="170" rx="3" ry="3" fill="#e9ecef">
                  <animate attributeName="height" from="0" to="170" dur="0.6s" begin="3s" fill="freeze" />
                </rect>

                {/* Sidebar */}
                <rect x="490" y="130" width="240" height="300" rx="5" ry="5" fill="#e9ecef" filter="url(#shadow)">
                  <animate attributeName="height" from="0" to="300" dur="0.8s" begin="3.2s" fill="freeze" />
                </rect>
                <rect x="510" y="150" width="200" height="40" rx="3" ry="3" fill="#f1f3f5">
                  <animate attributeName="width" from="0" to="200" dur="0.5s" begin="4s" fill="freeze" />
                </rect>
                <rect x="510" y="200" width="200" height="40" rx="3" ry="3" fill="#f1f3f5">
                  <animate attributeName="width" from="0" to="200" dur="0.5s" begin="4.2s" fill="freeze" />
                </rect>
                <rect x="510" y="250" width="200" height="40" rx="3" ry="3" fill="#f1f3f5">
                  <animate attributeName="width" from="0" to="200" dur="0.5s" begin="4.4s" fill="freeze" />
                </rect>
                <rect x="510" y="300" width="200" height="40" rx="3" ry="3" fill="#f1f3f5">
                  <animate attributeName="width" from="0" to="200" dur="0.5s" begin="4.6s" fill="freeze" />
                </rect>
                <rect x="510" y="350" width="200" height="40" rx="3" ry="3" fill="#f1f3f5">
                  <animate attributeName="width" from="0" to="200" dur="0.5s" begin="4.8s" fill="freeze" />
                </rect>

                {/* Animated Elements */}
                <g>
                  <rect x="90" y="150" width="0" height="20" rx="3" ry="3" fill="#4a90e2">
                    <animate attributeName="width" from="0" to="360" dur="1s" begin="5s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="90" y="180" width="0" height="20" rx="3" ry="3" fill="#4a90e2">
                    <animate attributeName="width" from="0" to="320" dur="1s" begin="5.2s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="90" y="210" width="0" height="20" rx="3" ry="3" fill="#4a90e2">
                    <animate attributeName="width" from="0" to="280" dur="1s" begin="5.4s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="510" y="150" width="0" height="40" rx="3" ry="3" fill="#9b59b6">
                    <animate attributeName="width" from="0" to="200" dur="0.8s" begin="5.6s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="510" y="200" width="0" height="40" rx="3" ry="3" fill="#9b59b6">
                    <animate attributeName="width" from="0" to="200" dur="0.8s" begin="5.8s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="510" y="250" width="0" height="40" rx="3" ry="3" fill="#9b59b6">
                    <animate attributeName="width" from="0" to="200" dur="0.8s" begin="6s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="510" y="300" width="0" height="40" rx="3" ry="3" fill="#9b59b6">
                    <animate attributeName="width" from="0" to="200" dur="0.8s" begin="6.2s" fill="freeze"/>
                  </rect>
                </g>
                <g>
                  <rect x="510" y="350" width="0" height="40" rx="3" ry="3" fill="#9b59b6">
                    <animate attributeName="width" from="0" to="200" dur="0.8s" begin="6.4s" fill="freeze"/>
                  </rect>
                </g>
              </svg>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-xl">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Time is
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Money.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">Our team of skilled professionals is dedicated to delivering high-quality digital solutions in record time, without compromising on excellence</p>
            <ul className="space-y-4 mb-10">
              <FeatureItem text="Experienced Team" />
              <FeatureItem text="Cutting-Edge Tools" />
              <FeatureItem text="Quality Assurance" />
              <FeatureItem text="Client Collaboration" />
              <FeatureItem text="Timely Delivery" />
              <FeatureItem text="Cost-Effective Solutions" />
            </ul>
            <Link to="/web_builder">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center space-x-2"
              >
                <span>Choose your style</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection