import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assuming you're using Vite, you can import images like this:
import screenshot1 from '../assets/portfolios/screenshot1.png';
import screenshot2 from '../assets/portfolios/screenshot2.png';
import screenshot3 from '../assets/portfolios/screenshot3.png';

const ProjectCard = ({ title, description, image, link }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl"
  >
    <div className="relative overflow-hidden">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Link
          to={link}
          className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const PortfolioShowcase = () => {
  const projects = [
    {
      title: "Sales Management System",
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
    <section id="portfolio" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Featured Work
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover how we've transformed businesses across Africa with our innovative web solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;