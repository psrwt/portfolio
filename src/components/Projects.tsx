import type { NextPage } from 'next';
import React from 'react';

// --- Data Structure for Projects ---
interface Project {
    title: string;
    date: string;
    description: string;
    tags: string[];
    sourceUrl?: string;
    visitLink?: string;
}

const projectsData: Project[] = [
    {
        title: 'CWxAI.in',
        date: 'Jan 2025 – Present',
        description: 'An AI platform that automates startup validation by transforming a user idea into a comprehensive report. Its RAG pipeline dynamically scrapes and analyzes data from hundreds of real-time sources, breaking the concept down into key areas like competitive landscape, finances, and strategic insights.',
        tags: ['Next.js', 'Flask', 'RAG', 'Web Scraping', 'Razorpay', 'LLM'],
        visitLink: 'https://www.cwxai.in/',
    },
    {
        title: 'Content Automation System',
        date: 'Apr 2025 - Present',
        description: 'An end-to-end automated content generation system that scrapes trending topics from Google Alerts and uses an AI pipeline (GPT/Gemini) to generate outlines, summarize content, and draft SEO-optimized articles.',
        tags: ['Python', 'React.js', 'Flask', 'Web Scraping', 'LLM', 'SEO'],
        visitLink: 'https://blog.codewhy.in/',
    },
    {
        title: 'Chat Application',
        date: 'Feb 2024',
        description: 'A scalable, real-time chat platform using the MERN stack and Socket.IO. Features secure JWT-based authentication, session management, and image sharing functionality with Multer for file uploads.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT'],
        visitLink: 'https://chat-app-du2i.onrender.com/',
        sourceUrl: 'https://github.com/PraveenSRawatGithub/chat-app',
    },
    {
        title: 'Weather Checker',
        date: 'Sep 2023',
        description: 'A real-time weather application that delivers accurate forecasts for any country and its cities worldwide. It provides up-to-the-minute temperature, humidity, wind speed, and condition updates.',
        tags: ['React.js', 'Weather API'],
        visitLink: 'https://weatherweb-react-app.netlify.app/',
        sourceUrl: 'https://github.com/PraveenSRawatGithub/weather-react-app',
    },
];

const GitHubIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

const VisitIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
    </svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (

    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-xl hover:border-slate-300">
        <div className="flex-grow">
            <h3 className="text-lg font-bold text-slate-800">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{project.date}</p>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">{project.description}</p>
        </div>
        <div className="mt-6">
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (

                    <span key={tag} className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4">
                {project.visitLink && (

                    <a
                        href={project.visitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-lg shadow-sm hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
                    >
                        <VisitIcon />
                        Visit
                    </a>
                )}

                {project.sourceUrl && (

                    <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-800 rounded-lg shadow-sm hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
                    >
                        <GitHubIcon />
                        Source
                    </a>
                )}
            </div>
        </div>
    </div>
);


const Projects: NextPage = () => {
    return (
        <div className="bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 font-sans">
            <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                    Check out my projects.
                </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
                {projectsData.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;