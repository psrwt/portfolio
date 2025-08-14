"use client";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}   // to control the blur density
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ opacity: 0 }}
        className="text-black text-6xl font-bold"
      >
        Hi, I&apos;m Praveen Singh Rawat
      </motion.h1>
    </main>
  );
}

