'use client';

import { FC, useState } from 'react';
import Image from 'next/image';

interface Experience {
  logo: string;
  company: string;
  roles: string[];
  date: string;
  description?: string[];
}

const experiencesData: Experience[] = [
  {
    logo: "/cwxai_logo.png",
    company: 'CWxAI.in',
    roles: ['Full Stack Developer'],
    date: 'Jan 2025 – Present',
    description: [
      'An AI-driven platform that automates startup validation using Retrieval-Augmented Generation (RAG) and real-time data sources',
      'Led frontend development and user interface design using Next.js, ensuring a responsive and intuitive user experience',
      'Integrated Razorpay for seamless and secure online payments across global markets',
      'Contributed to platform growth, reaching 100+ users in 12 countries and generating 230+ reports post-launch',
    ],
  },
  {
    logo: "/nic_logo.png",
    company: 'National Informatics Center',
    roles: ['Full Stack Intern'],
    date: 'June 2024 – July 2024',
    description: [
      'Redesigned and modernized the Inspector Tracking System (ITS) using HTML, CSS, JavaScript, Laravel, and MySQL',
      'Developed a secure authentication system to safeguard access to sensitive data',
      'Designed intuitive, user-friendly interfaces for both administrative staff and inspectors',
      'Implemented robust document upload functionality with access control',
      'Built features for streamlined inspector and admin management, including profile creation, editing, and real-time data updates',
    ],
  },
];

interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-3 sm:mr-4">
        <div className="relative w-8 h-8 md:w-10 md:h-10 sm:w-12 sm:h-12 border border-gray-200 rounded-full flex items-center justify-center bg-white shadow-lg shadow-gray-200">
          <Image src={experience.logo} alt={`${experience.company} logo`} width={40} height={40} className="rounded-full" />
        </div>
        {!isLast && <div className="w-px flex-grow bg-gray-200" />}
      </div>

      <div className="w-full pb-4 sm:pb-6">
        <div className="border-2 border-gray-100 hover:shadow-sm hover:shadow-gray-200 hover:border-gray-200 transition-all duration-500 rounded-lg p-3 sm:p-4">
          <div className="flex justify-between items-start cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div>
              <h3 className="font-bold text-gray-800 text-sm sm:text-base">{experience.company}</h3>
              {experience.roles.map((role, i) => (
                <p key={i} className="text-xs sm:text-sm text-gray-800">{role}</p>
              ))}
            </div>
            <div className="flex items-center space-x-1 sm:space-x-4">
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 bg-gray-100 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full whitespace-nowrap">
                {experience.date}
              </div>
              {experience.description && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>

          {experience.description && (
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mt-3 pt-3 border-t' : 'max-h-0 opacity-0'
                }`}
            >
              <ul className="list-disc pl-4 text-gray-500 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TechnicalExperience: FC = () => {
  return (
    <div className="bg-white max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 font-sans mt-8 sm:mt-12">
      <h2 className="text-2xl sm:text-3xl text-gray-900 font-bold mb-6 sm:mb-8">Technical Experience</h2>
      <div>
        {experiencesData.map((exp, index) => (
          <ExperienceItem
            key={index}
            experience={exp}
            isLast={index === experiencesData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalExperience;
