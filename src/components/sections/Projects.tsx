import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { ExternalLink, Github, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Get-Apartments',
    date: 'October 2023',
    description: 'A real estate listing platform that enables users to discover, compare, and inquire about apartments for rent or purchase, with detailed property information and location-based search.',
    technologies: ['Node.js', 'Express.js', 'React.js', 'RapidAPI', 'CSS3', 'Tailwind CSS'],
    features: [
      'Users can browse and filter apartment listings by location, price, and amenities',
      'Each listing includes images, specifications, and contact options',
      'Admin panel for managing listings, users, and property details',
      'Interactive map integration for location-based exploration',
      'Clean, responsive interface for an intuitive user experience',
      'Integrated with RapidAPI for property data and real-time market information',
    ],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    demoLink: 'https://project-demo.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Recipe Blog',
    date: 'June 2024 – July 2024',
    description: 'A full-stack web application for users to upload, discover, and explore a wide variety of homemade and international recipes, complete with images, ingredients, and step-by-step instructions.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'React.js', 'CSS3'],
    features: [
      'Allows users to add, edit, and delete their own recipes',
      'Features a searchable recipe catalog with category and ingredient filters',
      'Displays detailed recipe pages with cooking instructions and images',
      'Implements user authentication for recipe management',
      'Responsive UI for smooth browsing across devices',
    ],
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    githubLink: 'https://github.com',
  },
  {
    title: 'MyShowz',
    date: 'August 2024 – October 2024',
    description: 'A dynamic ticket booking platform designed for browsing and reserving seats for movies, live shows, and events, providing users with real-time availability and secure booking options.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
    features: [
      'Allows users to browse movies and events with filters by location, genre, and date',
      'Interactive seat selection and real-time availability updates',
      'Secure user authentication and payment integration',
      'Admin panel for event management and analytics',
      'Responsive UI optimized for both desktop and mobile devices',
    ],
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    demoLink: 'https://project-demo.com',
  },
];

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <Card className="group h-full flex flex-col transform transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
          <div className="flex items-center text-gray-200 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>
      </div>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        <div className="mb-4">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
          >
            {showDetails ? (
              <>Hide Details <ChevronUp size={16} className="ml-1" /></>
            ) : (
              <>View Details <ChevronDown size={16} className="ml-1" /></>
            )}
          </button>
          
          {showDetails && (
            <div className="mt-3 space-y-3">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="ml-1">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between gap-2">
        {project.demoLink && (
          <Button 
            href={project.demoLink} 
            isExternal 
            variant="primary" 
            size="sm"
            className="flex-1"
          >
            <ExternalLink size={14} className="mr-1" /> Live Demo
          </Button>
        )}
        
        {project.githubLink && (
          <Button 
            href={project.githubLink} 
            isExternal 
            variant={project.demoLink ? "outline" : "primary"} 
            size="sm"
            className="flex-1"
          >
            <Github size={14} className="mr-1" /> GitHub
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <Section 
      id="projects" 
      title="Projects" 
      subtitle="Here are some of the projects I've worked on recently."
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;