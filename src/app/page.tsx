"use client";
// Import the necessary React hooks
import { useState, useEffect, useRef } from "react";
import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechnicalExperience from "@/components/TechnicalExperience";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";

export default function Home() {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('home');

  // Create refs to attach to each section element
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
  };

  // This effect sets up the Intersection Observer to watch the sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // --- THE FIX IS HERE ---
      {
        // OLD: threshold: 0.5
        // A lower threshold makes the update trigger as soon as a section
        // comes into view, fixing the lag.
        threshold: 0.2,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Empty array ensures this runs only once

  return (
    <main className="min-h-screen bg-white flex justify-center">
      <div className="hidden sm:block">
        {/* Pass the activeSection state down as the activeId prop */}
        <FloatingNav activeId={activeSection} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Attach the refs to the corresponding sections */}
        <section id="home" ref={sectionRefs.home}>
          <Hero />
        </section>
        <section id="experience" ref={sectionRefs.experience}>
          <TechnicalExperience />
        </section>
        <section id="skills" ref={sectionRefs.skills}>
          <TechStack />
        </section>
        <section id="projects" ref={sectionRefs.projects}>
          <Projects />
        </section>
      </motion.div>
    </main>
  );
}