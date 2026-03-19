'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with React frontend, Node.js/Express backend, and MongoDB database. Integrated Stripe API for payments and implemented JWT authentication.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    link: '#',
  },
  {
    title: 'Task Management Dashboard',
    description:
      'Real-time task management application built with Next.js and Firebase. Features include task scheduling, collaboration, and push notifications.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'WebSocket'],
    link: '#',
  },
  {
    title: 'Weather Data Analytics',
    description:
      'Data analytics dashboard consuming real-time weather APIs. Visualizes trends with interactive charts and provides detailed forecasting insights.',
    technologies: ['React', 'D3.js', 'REST API', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Social Media Integration',
    description:
      'Multi-platform social media aggregator with OAuth 2.0 authentication. Consolidates posts from multiple platforms with real-time updates.',
    technologies: ['React', 'OAuth 2.0', 'GraphQL', 'Redis', 'AWS Lambda'],
    link: '#',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Featured Projects
        </h2>
        <p className="text-center text-gray-300 mb-16 text-lg">
          Showcasing my expertise in full-stack development and API integration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 p-8 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />

              <h3 className="text-2xl font-bold mb-4 text-blue-300">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-3 font-semibold">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-900 bg-opacity-50 border border-blue-500 rounded-full text-xs font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform group-hover:translate-x-2"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
