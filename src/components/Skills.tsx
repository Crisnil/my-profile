'use client';

import { useState, useEffect } from 'react';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Hooks', 'State Management'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'TypeScript', 'REST APIs', 'GraphQL', 'Authentication'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'SQL', 'NoSQL'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'GitHub Pages', 'Vercel'],
  },
  {
    category: 'API Integration',
    items: ['REST APIs', 'OAuth 2.0', 'Stripe', 'Third-party APIs', 'WebSockets', 'GraphQL'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Code Review', 'Team Leadership', 'Mentoring', 'Agile', 'Communication'],
  },
];

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Animate categories on scroll
    const categories = document.querySelectorAll('[data-skill-category]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt((entry.target as HTMLElement).getAttribute('data-skill-category') || '0');
          setVisibleCategories((prev) => new Set([...prev, index]));
        }
      });
    });

    categories.forEach((cat) => observer.observe(cat));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-300 mb-16 text-lg">
          A comprehensive overview of my professional capabilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              data-skill-category={index}
              className={`bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-500 transform ${
                visibleCategories.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-300">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-200">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-800 rounded-xl border border-slate-700 p-12">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">Experience</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-purple-500 pl-6">
              <h4 className="text-xl font-bold text-blue-300">Senior Developer</h4>
              <p className="text-gray-400 text-sm">2022 - Present</p>
              <p className="text-gray-300 mt-2">
                Leading full-stack development projects, mentoring junior developers, and implementing scalable solutions.
              </p>
            </div>
            <div className="border-l-2 border-purple-500 pl-6">
              <h4 className="text-xl font-bold text-blue-300">Full Stack Engineer</h4>
              <p className="text-gray-400 text-sm">2020 - 2022</p>
              <p className="text-gray-300 mt-2">
                Developed and maintained production applications with React and Node.js, integrated third-party APIs.
              </p>
            </div>
            <div className="border-l-2 border-purple-500 pl-6">
              <h4 className="text-xl font-bold text-blue-300">Frontend Developer</h4>
              <p className="text-gray-400 text-sm">2019 - 2020</p>
              <p className="text-gray-300 mt-2">
                Specialized in React development, responsive design, and component architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
