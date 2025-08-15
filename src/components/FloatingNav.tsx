'use client';

import React, { useState, useRef } from 'react'; // Import useRef
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import type { ReactElement } from 'react';

// --- Icon Components (Declared First) ---
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);
const ExperienceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);
const SkillsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);
const ProjectsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
);
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

// --- Type Definitions ---
type NavItem = {
  id: string;
  name: string;
  href: string;
  icon: ReactElement;
  external?: boolean;
  type?: never;
};
type NavDivider = {
  type: 'divider';
  id?: never;
  name?: never;
};

// --- Navigation Data ---
const navItems: (NavItem | NavDivider)[] = [
  { id: 'home', name: 'Home', href: '#home', icon: <HomeIcon /> },
  { id: 'experience', name: 'Experience', href: '#experience', icon: <ExperienceIcon /> },
  { id: 'skills', name: 'Skills', href: '#skills', icon: <SkillsIcon /> },
  { id: 'projects', name: 'Projects', href: '#projects', icon: <ProjectsIcon /> },
  { type: 'divider' },
  { id: 'github', name: 'GitHub', href: 'https://github.com/PraveenSRawatGithub', icon: <GitHubIcon />, external: true },
  // CORRECTED: The name is now 'LinkedIn'
  { id: 'linkedin', name: 'LinkedIn', href: 'https://linkedin.com/in/praveensinghrawat', icon: <LinkedInIcon />, external: true },
];

// --- Main Component ---
export function FloatingNav({ activeId }: { activeId: string }) {
  // Store the top position in state along with the ID
  const [hoveredItem, setHoveredItem] = useState<{ id: string; top: number } | null>(null);
  const navRef = useRef<HTMLDivElement>(null); // Ref for the main nav container

  return (
    <nav 
      className="fixed top-1/2 left-4 -translate-y-1/2 z-50"
      onMouseLeave={() => setHoveredItem(null)}
    >
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            layoutId="tooltip"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-sm font-semibold rounded-md shadow-lg whitespace-nowrap"
            // Use the stored `top` value for perfect positioning
            style={{ top: hoveredItem.top, transform: 'translateY(8px)' }}
          >
            {navItems.find(item => item.id === hoveredItem.id)?.name}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div 
        ref={navRef} // Attach ref to the container
        className="flex flex-col items-center gap-2 p-2 bg-white/70 backdrop-blur-md border border-slate-200 rounded-full shadow-lg"
      >
        {navItems.map((item, index) => 
          item.type === 'divider' ? (
            <div key={`divider-${index}`} className="w-6 h-px bg-slate-200 my-1" />
          ) : (
            <Link 
              key={item.id}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onMouseEnter={(e) => {
                // Get the actual position of the hovered link
                const linkElement = e.currentTarget as HTMLAnchorElement;
                const top = linkElement.offsetTop;
                setHoveredItem({ id: item.id, top: top });
              }}
              aria-label={item.name}
              className="relative w-9 h-9 flex items-center justify-center rounded-full cursor-pointer focus:outline-none"
            >
              {activeId === item.id && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute inset-0 bg-slate-100 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              
              <span className={`relative z-10 transition-colors duration-200 ${
                activeId === item.id ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}>
                {item.icon}
              </span>
            </Link>
          )
        )}
      </div>
    </nav>
  );
}