import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, technologies, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-purple-600 font-medium hover:text-purple-500"
      >
        View Project <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const projects = [
    {
      title: "AfriMart E-commerce Platform",
      description: "A cutting-edge e-commerce solution that boosted sales by 200% for a major African retailer.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "AI-powered recommendations"],
      link: "https://afrimart.example.com"
    },
    {
      title: "SafariTech Booking System",
      description: "An AI-powered booking system that increased bookings by 150% for a leading safari company.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Machine Learning"],
      link: "https://safaritech.example.com"
    },
    {
      title: "AgroConnect Farmer's Portal",
      description: "A web app connecting farmers to markets, resulting in a 180% increase in produce sales.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Express.js", "MySQL", "Blockchain"],
      link: "https://agroconnect.example.com"
    },
    {
      title: "EduTech Learning Management System",
      description: "A comprehensive LMS that improved student engagement by 120% for a pan-African education provider.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Angular", "Laravel", "PostgreSQL", "AI-driven personalization"],
      link: "https://edutech.example.com"
    },
    {
      title: "HealthTrack Patient Management System",
      description: "An innovative healthcare solution that reduced patient wait times by 60% for a network of clinics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Python Flask", "MongoDB", "Machine Learning"],
      link: "https://healthtrack.example.com"
    },
    {
      title: "FinPro Banking Dashboard",
      description: "A secure and intuitive banking dashboard that increased mobile banking adoption by 250% for a regional bank.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Java Spring Boot", "Oracle", "AI fraud detection"],
      link: "https://finpro.example.com"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover how we've transformed businesses across Africa with our innovative web solutions.
          </p>
        </motion.div>

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
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;