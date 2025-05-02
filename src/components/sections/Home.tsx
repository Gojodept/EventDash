import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Github as GitHub, Linkedin, FileText, ArrowRight } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            className={`w-full md:w-1/2 space-y-6 text-center md:text-left transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="space-y-3">
              <p className="text-blue-600 dark:text-blue-400 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
                  Arindam Kashyap
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                Full-Stack Web Developer & UI/UX Enthusiast
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              A passionate Full-Stack Web Developer and UI/UX Designer with expertise in Python, JavaScript, React, and CSS. I specialize in building dynamic, responsive websites and applications, focusing on user-centric design and performance optimization.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button href="#projects" className="group">
                View Projects 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
              <Button href="/resume.pdf" variant="outline" download="Arindam_Kashyap_Resume.pdf">
                <FileText size={16} className="mr-2" /> Download CV
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div 
            className={`w-full md:w-1/2 flex justify-center transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse opacity-20"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20"></div>
              <img
                src=""
                alt="Profile"
                className="absolute inset-8 rounded-full object-cover w-48 h-48 md:w-64 md:h-64 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;