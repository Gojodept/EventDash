import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import { GraduationCap, Briefcase, Code, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a B.Tech student at Lovely Professional University, passionate about full-stack web development and UI/UX design. With a focus on creating user-centric digital experiences, I continually explore new technologies and design methodologies to enhance my skills and deliver impactful solutions.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Beyond coding, I'm deeply interested in cybersecurity and constantly seek ways to implement secure practices in my development work. I believe that great software combines elegant design, robust functionality, and strong security foundations.
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Objective</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-4 border-blue-500 pl-4 py-1">
              "Skilled in full-stack web development and UI/UX design, with expertise in Python, Java, JavaScript, React, and CSS. I am passionate about creating seamless user experiences and solving complex technical challenges while ensuring scalability and maintainability."
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
              <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" size={22} />
              Education
            </h3>
            
            <div className="space-y-1">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">B.Tech. in Computer Science and Engineering</h4>
              <p className="text-gray-700 dark:text-gray-300">Lovely Professional University, Punjab</p>
              <p className="text-gray-600 dark:text-gray-400">CGPA: 7.60/10</p>
              <p className="text-gray-600 dark:text-gray-400">2022 – 2026</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
              <Lightbulb className="mr-2 text-blue-600 dark:text-blue-400" size={22} />
              Personal Traits
            </h3>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">Creative problem solver with analytical thinking</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">Detail-oriented with strong attention to aesthetic and functional design</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">Collaborative team player, always looking for innovative solutions</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">Adaptable learner, quick to master new technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;