"use client";
import { useState, useEffect, useRef } from "react";
import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechnicalExperience from "@/components/TechnicalExperience";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    const initial = Object.entries(sectionRefs).find(
      ([, ref]) =>
        ref.current &&
        ref.current.getBoundingClientRect().top <= window.innerHeight / 2
    );
    if (initial) setActiveSection(initial[0]);

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      observer.disconnect();
    };
  }, []);

  const handleNavSelect = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Container: stagger children
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Section: upward + fade + blur
  const sectionVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut" as const, // TS-safe easing
      },
    },
  };

  return (
    <main className="min-h-screen bg-white flex justify-center">
      <FloatingNav activeId={activeSection} onSelect={handleNavSelect} />

      {/* Page-wide fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Section stack animation */}
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.section
            id="home"
            ref={sectionRefs.home}
            variants={sectionVariants}
          >
            <Hero />
          </motion.section>

          <motion.section
            id="experience"
            ref={sectionRefs.experience}
            variants={sectionVariants}
          >
            <TechnicalExperience />
          </motion.section>

          <motion.section
            id="skills"
            ref={sectionRefs.skills}
            variants={sectionVariants}
          >
            <TechStack />
          </motion.section>

          <motion.section
            id="projects"
            ref={sectionRefs.projects}
            variants={sectionVariants}
          >
            <Projects />
          </motion.section>
        </motion.div>
      </motion.div>
    </main>
  );
}
