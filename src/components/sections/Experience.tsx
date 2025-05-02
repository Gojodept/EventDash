import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import { CalendarDays, Smartphone, Award } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  organization, 
  date, 
  description, 
  icon 
}) => {
  return (
    <div className="relative pl-8 pb-8 group">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 shadow-md z-10 transition-all duration-300 group-hover:scale-125"></div>
      
      <Card>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <div className="flex items-center mb-2 md:mb-0">
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                {icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{organization}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <CalendarDays size={16} className="mr-1" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'App Development',
      organization: 'Smart India Hackathon',
      date: 'September 2024',
      description: 'Developed a user-friendly mobile application using React Native for seamless interaction between farmers and customers, ensuring smooth performance across devices.',
      icon: <Smartphone size={20} />,
    },
    {
      title: 'Hackathon Evaluator',
      organization: 'Hackathon',
      date: 'September 2024',
      description: 'Judged student projects focused on frontend development using React Native and React, providing constructive feedback and scoring based on innovation and execution.',
      icon: <Award size={20} />,
    },
  ];

  return (
    <Section 
      id="experience" 
      title="Experience" 
      subtitle="My professional experience and contributions."
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            organization={exp.organization}
            date={exp.date}
            description={exp.description}
            icon={exp.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;