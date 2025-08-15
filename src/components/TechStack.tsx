'use client'; // Required for using state and interactions

import { useState } from 'react';
import type { NextPage } from 'next';

// --- Data Structures (No changes) ---
interface Skill {
  name: string;
  logo: string;
}
interface SkillSubCategory {
  title: string;
  skills: Skill[];
}
interface SkillCategory {
  title: string;
  subCategories: SkillSubCategory[];
}

// --- Data (No changes) ---
const skillsData: SkillCategory[] = [
    {
        title: 'Web Development',
        subCategories: [
            {
                title: 'Languages & Frontend',
                skills: [
                    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                ],
            },
            {
                title: 'Backend & Databases',
                skills: [
                    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg' },
                    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
                    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
                    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                ],
            },
        ],
    },
    {
        title: 'AI & Machine Learning',
        subCategories: [
            {
                title: 'Languages',
                skills: [{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }],
            },
            {
                title: 'Libraries & Frameworks',
                skills: [
                    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
                    { name: 'scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
                    { name: 'Transformers', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
                    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
                    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
                ],
            },
        ],
    },
    {
        title: 'General Tools & Platforms',
        subCategories: [
            {
                title: 'Developer Tools',
                skills: [
                    { name: 'Github', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                    { name: 'PyCharm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' },
                    { name: 'Postman', logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
                    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg' },
                    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                ],
            },
            {
                title: 'APIs & Integrations',
                skills: [
                    { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg' },
                    { name: 'Razorpay', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-razorpay-1649771-1399875.png?f=webp&w=512' },
                    { name: 'OpenAI API', logo: 'https://logo.svgcdn.com/l/openai.svg' },
                    { name: 'Gemini', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.svg' }
                ],
            },
        ],
    },
];


// --- Reusable Skill Item Component (MODIFIED) ---
const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
    // MODIFICATION 2: Reduced padding on mobile (p-2) and increased on larger screens (sm:p-4)
    <div className="flex flex-col items-center text-center gap-2 p-2 sm:p-4 transition-transform duration-300 hover:scale-105">
        {/* MODIFICATION 2: Reduced icon size on mobile (w-12 h-12) and increased on larger screens (sm:w-16 sm:h-16) */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
            <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-full h-full object-contain"
                loading="lazy"
            />
        </div>
        <p className="text-sm text-gray-700">{skill.name}</p>
    </div>
);

// --- Main Technical Skills Component (MODIFIED) ---
const TechnicalSkills: NextPage = () => {
    const [activeCategory, setActiveCategory] = useState(skillsData[0].title);
    const currentCategoryData = skillsData.find(cat => cat.title === activeCategory);

    return (
        <div className="bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans mt-12">
            <h1 className='text-3xl sm:text-4xl text-center text-gray-900 font-bold mb-8 sm:mb-12'>Tech Stack.</h1>

            {/* Horizontal Category Tabs */}
            <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
                {skillsData.map((category) => (
                    <button
                        key={category.title}
                        onClick={() => setActiveCategory(category.title)}
                        // MODIFICATION 1: Removed the `focus:ring` classes to eliminate the blue outline on click.
                        className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 focus:outline-none ${
                            activeCategory === category.title
                                ? 'bg-gray-800 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {/* Display Skills for the Active Category */}
            {currentCategoryData && (
                <div key={activeCategory} className="animate-fade-in">
                    {currentCategoryData.subCategories.map((subCategory, subIndex) => (
                        <div key={subIndex} className={subIndex > 0 ? 'mt-12' : ''}>
                            <h3 className="text-lg sm:text-xl text-center font-semibold text-gray-500">
                                {subCategory.title}
                            </h3>

                            {/* MODIFICATION 2: Reduced gap between icons on mobile */}
                            <div className="mt-6 flex flex-wrap justify-center items-center gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-2">
                                {subCategory.skills.map((skill, skillIndex) => (
                                    <SkillItem key={skillIndex} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TechnicalSkills;