"use client";
import Hero from "@/components/Hero";
import TechnicalExperience from "@/components/TechnicalExperience";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}   // to control the blur density
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ opacity: 0 }}
      >
        <Hero />
        
        <TechnicalExperience />
      </motion.div>
    </main>
  );
}

