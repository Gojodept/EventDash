import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { Award, Calendar, ExternalLink, GraduationCap } from 'lucide-react';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  link?: string;
  color: string;
}

const certifications: CertificationProps[] = [
  {
    title: 'Full-Stack Development using MERN Stack',
    issuer: 'Cipher School',
    date: 'June 2024 - July 2024',
    credentialId: 'MERN-2024-CS001',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'CRUD Operations'],
    link: 'https://certificate.example.com',
    color: 'blue',
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    issuer: 'Udemy',
    date: 'August 2024',
    credentialId: 'DSA-2024-UD001',
    skills: ['Data Structures', 'Algorithms', 'C/C++', 'Problem Solving', 'Time Complexity'],
    link: 'https://certificate.example.com',
    color: 'purple',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'August 2024 - November 2024',
    credentialId: 'CC-2024-NPTEL001',
    skills: ['Cloud Architecture', 'IaaS', 'PaaS', 'SaaS', 'Virtualization', 'Resource Management'],
    link: 'https://certificate.example.com',
    color: 'emerald',
  },
];

const colorVariants = {
  blue: 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500',
  purple: 'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500',
  emerald: 'from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500',
};

const CertificationCard: React.FC<{ certification: CertificationProps }> = ({ certification }) => {
  return (
    <Card className="group h-full">
      <CardContent className="relative">
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorVariants[certification.color as keyof typeof colorVariants]} opacity-10 rounded-full -mr-6 -mt-6 blur-2xl transition-all duration-300 group-hover:opacity-20`}></div>
        
        <div className="flex items-start mb-4">
          <div className={`p-2 rounded-xl bg-gradient-to-br ${colorVariants[certification.color as keyof typeof colorVariants]} text-white mr-4`}>
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
              {certification.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{certification.issuer}</p>
            
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
              <Calendar size={14} className="mr-1" />
              {certification.date}
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Credential ID: {certification.credentialId}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill, index) => (
              <span 
                key={index} 
                className={`px-2 py-1 text-xs rounded-full 
                  ${certification.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                    certification.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' :
                    'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      
      {certification.link && (
        <CardFooter>
          <Button 
            href={certification.link} 
            isExternal 
            variant="text" 
            size="sm"
            className="w-full justify-center group"
          >
            Verify Credential 
            <ExternalLink size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

const Certifications = () => {
  return (
    <Section 
      id="certifications" 
      title="Certifications & Achievements" 
      subtitle="Professional certifications and notable achievements that showcase my expertise."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;