'use client';

import React from 'react';
import { ExternalLink, ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Projects() {
  const primaryProjects = [
    {
      title: 'Gurukul Mock Test System',
      description: 'A comprehensive mock test platform for students, featuring timed quizzes, performance tracking, and detailed analytics.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/aadityak09771-sudo/gurukul-mock-test',
      liveUrl: null,
    },
    {
      title: 'Barcode Cafe',
      description: 'A modern web application for a cafe, featuring a digital menu, order management, and a clean user interface.',
      tech: ['React.js', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/aadityak09771-sudo/barcode-caffe',
      liveUrl: null,
    },
    {
      title: 'Toppers Siksha Kendra',
      description: 'An educational portal for a coaching center, providing course information, student registration, and learning resources.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay'],
      githubUrl: 'https://github.com/aadityak09771-sudo/toppers_siksha_kendra',
      liveUrl: null,
    },
    {
      title: 'Gym App Plan',
      description: 'A fitness application for creating and tracking workout plans, with exercises, sets, and reps management.',
      tech: ['React.js', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/aadityak09771-sudo/gym-app-plan',
      liveUrl: null,
    },
    {
      title: 'Apex Arena Gym',
      description: 'A promotional website for a gym, showcasing facilities, membership plans, and trainer profiles with a modern design.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/aadityak09771-sudo/apex-arena-gym',
      liveUrl: null,
    }
  ];

  const secondaryProjects = [
    {
      title: 'Student Dashboard',
      description: 'A MERN stack student management and learning tracking platform with data visualization and progress monitoring.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      githubUrl: 'https://github.com/aadityak09771-sudo/Student-Dashboard',
      liveUrl: null,
    },
    {
      title: 'Portfolio Website',
      description: 'This personal portfolio, built with Next.js, Tailwind CSS, and Framer Motion, deployed on Vercel.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/aadityak09771-sudo/my-portfolio',
      liveUrl: '#', // Link to the current site
    }
  ];

  const getTechColor = (tech) => {
    const colors = {
      'React.js': 'bg-sky-900/50 text-sky-300 border border-sky-700',
      'Node.js': 'bg-green-900/50 text-green-300 border border-green-700',
      'Express.js': 'bg-neutral-800 text-neutral-300 border border-neutral-700',
      'MongoDB': 'bg-emerald-900/50 text-emerald-300 border border-emerald-700',
      'Firebase': 'bg-yellow-900/50 text-yellow-300 border border-yellow-700',
      'Tailwind CSS': 'bg-teal-900/50 text-teal-300 border border-teal-700',
      'Next.js': 'bg-gray-800 text-gray-300 border border-gray-700',
      'Framer Motion': 'bg-purple-900/50 text-purple-300 border border-purple-700',
      'JavaScript': 'bg-yellow-900/50 text-yellow-300 border border-yellow-700',
      'HTML5': 'bg-orange-900/50 text-orange-300 border border-orange-700',
      'CSS3': 'bg-blue-900/50 text-blue-300 border border-blue-700',
      'Razorpay': 'bg-sky-900/50 text-sky-300 border border-sky-700',
    };
    return colors[tech] || 'bg-neutral-800 text-neutral-300 border border-neutral-700';
  };

  const ProjectCard = ({ project }) => (
    <motion.div 
      layout 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.9 }} 
      transition={{ duration: 0.3 }} 
      className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col relative hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30 p-6"
    >
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500">
          {project.title}
        </h3>
        <p className="text-neutral-400 mb-6 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className={`text-xs px-3 py-1 rounded-full ${getTechColor(t)}`}>{t}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"><ExternalLink size={16} /> Live Demo</a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 px-4 py-2 rounded-lg transition-colors"><FaGithub size={16} /> Source</a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto bg-neutral-950/50 pt-28">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected <span className="text-purple-500">Works</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
        </div>
      </motion.div>

      {/* Primary Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {primaryProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      {/* Secondary Projects */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-8 text-neutral-300">Other Noteworthy Projects</h3>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}