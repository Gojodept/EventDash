import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import { Code, Server, Database, Palette, Braces, Users } from 'lucide-react';

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillItemProps[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center mb-4">
          <div className="mr-3 text-blue-600 dark:text-blue-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        </div>
        <div>
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'C/C++', level: 70 },
      ],
    },
    {
      title: 'Frontend',
      icon: <Palette size={24} />,
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'REST API', level: 85 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      title: 'Development',
      icon: <Braces size={24} />,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'UI/UX Design', level: 82 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: [
        { name: 'Problem Solving', level: 88 },
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 80 },
        { name: 'Teamwork', level: 90 },
      ],
    },
  ];

  return (
    <Section 
      id="skills" 
      title="My Skills" 
      subtitle="I've worked with a variety of technologies and continue to expand my expertise."
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;