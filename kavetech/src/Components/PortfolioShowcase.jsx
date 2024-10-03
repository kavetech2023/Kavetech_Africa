import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import screenshot1 from '../assets/portfolios/screenshot1.png'
import screenshot2 from '../assets/portfolios/screenshot2.png'
import screenshot3 from '../assets/portfolios/FireShot Capture 005 - Kavetech - Africa - www.kavetech.africa.png'

const ProjectCard = ({ title, description, image, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-72 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-purple-600 font-medium hover:text-purple-500">
        View Project <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </motion.div>
)

const PortfolioShowcase = () => {
  const projects = [
    {
      title: "AfriMart E-commerce Platform",
      description: "A cutting-edge e-commerce solution that boosted sales by 200% for a major African retailer.",
      image: screenshot3,
      link: "/portfolio/afrimart"
    },
    {
      title: "Gari Yangu",
      description: "An AI-powered car purchase platform that increased conversions by 120%",
      image: screenshot1,
      link: "https://gari-yangu.vercel.app/"
    },
    {
      title: "Keja Yangu",
      description: "A web app connecting renters and landlords in Africa, resulting in a 180% increase in produce sales.",
      image: screenshot2,
      link: "https://keja-yangu.vercel.app/"
    }
  ];

  return (
    <div id="portfolio" className=" py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Our Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Discover how we've transformed businesses across Africa with our innovative web solutions.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default PortfolioShowcase;