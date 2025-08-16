"use client";

import React, { useState, useRef, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";


const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
      stroke="#1C274C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M15 18H9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ExperienceIcon = ({ width = "24", height = "24" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <path
      d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StackIcon = ({ width = "24", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path
      d="M0 10l8 4 8-4v2l-8 4-8-4v-2zm0-4l8 4 8-4v2l-8 4-8-4V6zm8-6l8 4-8 4-8-4 8-4z"
      fillRule="evenodd"
    />
  </svg>
);

const ProjectsIcon = ({ width = "24", height = "24" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10L13 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M22 11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975M21.9913 16C21.9554 18.4796 21.7715 19.8853 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.8-.25.8-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.26 3.4.96.1-.76.41-1.27.75-1.56-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.2a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.2 3.17-1.2.63 1.65.23 2.87.12 3.17.75.81 1.2 1.85 1.2 3.1 0 4.44-2.7 5.4-5.28 5.7.42.36.8 1.06.8 2.15v3.18c0 .31.22.67.8.56A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
  </svg>
);

const LinkedInIcon = ({ height = "24", width = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 48 48"
    height={height}
    width={width}
  >
    <path fill="none" d="M0 0h48v48H0z" />
    <path d="M34 4H14C8.5 4 4 8.5 4 14v20c0 5.5 4.5 10 10 10h20c5.5 0 10-4.5 10-10V14c0-5.5-4.5-10-10-10zM17 35h-4V20h4v15zm-2-18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2c0 1.1-.9 2-2 2zm20 18h-4v-7.5c0-2.5-1-3.6-3-3.6L24 24v11h-4V20l8-.2c3.4 0 7 2 7 7.6V35z" />
  </svg>
);

// ---------------- TYPES & DATA ----------------
type NavItem = {
  id: string;
  name: string;
  href: string;
  icon: ReactElement;
  external?: boolean;
};
type NavDivider = { type: "divider" };

const navItems: (NavItem | NavDivider)[] = [
  { id: "home", name: "Home", href: "#home", icon: <HomeIcon /> },
  { id: "experience", name: "Experience", href: "#experience", icon: <ExperienceIcon /> },
  { id: "skills", name: "Skills", href: "#skills", icon: <StackIcon /> },
  { id: "projects", name: "Projects", href: "#projects", icon: <ProjectsIcon /> },
  { type: "divider" },
  { id: "github", name: "GitHub", href: "https://github.com/PraveenSRawatGithub", icon: <GitHubIcon />, external: true },
  { id: "linkedin", name: "LinkedIn", href: "https://linkedin.com/in/praveensinghrawat", icon: <LinkedInIcon />, external: true },
];

const isNavItem = (i: NavItem | NavDivider): i is NavItem => "id" in i;
const isDivider = (i: NavItem | NavDivider): i is NavDivider => "type" in i;

// Make this return typed predicate so `item` below is NavItem | undefined
const getItemNameById = (id: string | undefined) => {
  if (!id) return "";
  const item = navItems.find((i): i is NavItem => isNavItem(i) && i.id === id);
  return item?.name ?? "";
};

// ---------------- COMPONENT ----------------
export function FloatingNav({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const [hoveredItem, setHoveredItem] = useState<{ id: string; top?: number; isMobile?: boolean } | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:block fixed top-1/2 left-4 -translate-y-1/2 z-50"
        onMouseLeave={() => setHoveredItem(null)}
      >
        <AnimatePresence>
          {hoveredItem && !hoveredItem.isMobile && (
            <motion.div
              layoutId="tooltip"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900/90 text-white text-sm font-semibold rounded-lg shadow-xl backdrop-blur-md"
              style={{ top: hoveredItem.top }}
            >
              {getItemNameById(hoveredItem.id)}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          ref={navRef}
          className="flex flex-col items-center gap-3 p-3 bg-white/30 backdrop-blur-xl border border-slate-200/40 rounded-2xl shadow-xl"
        >
          {navItems.map((item, index) => {
            // EXPLICIT branching ensures TS narrows the type correctly
            if (isDivider(item)) {
              return <div key={`divider-${index}`} className="w-6 h-px bg-slate-300/50 my-1" />;
            }

            // `item` is narrowed to NavItem here
            const nav = item;

            return (
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                key={nav.id}
                onClick={(e) => {
                  if (nav.external) {
                    window.open(nav.href, "_blank", "noopener,noreferrer");
                    return;
                  }
                  e.preventDefault();
                  onSelect(nav.id);
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  setHoveredItem({ id: nav.id, top: btn.offsetTop });
                }}
                aria-label={nav.name}
                className="relative w-10 h-10 flex items-center justify-center rounded-full cursor-pointer focus:outline-none bg-transparent"
              >
                {activeId === nav.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-200 to-indigo-400 shadow-lg shadow-indigo-300/40"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${activeId === nav.id ? "text-indigo-700" : "text-slate-500 hover:text-slate-900"
                    }`}
                >
                  {nav.icon}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* ---------------- MOBILE NAV ---------------- */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        {/* Hamburger */}
        <div className="relative">
          <button
            onClick={() => setIsDrawerOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-white/70 backdrop-blur-md shadow-md border border-slate-200"
          >
            <div className="w-5 h-0.5 bg-slate-800 mb-1" />
            <div className="w-5 h-0.5 bg-slate-800 mb-1" />
            <div className="w-5 h-0.5 bg-slate-800" />
          </button>

          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl p-3 z-50"
              >
                {/* filter(isNavItem) returns NavItem[] because isNavItem is a type predicate */}
                {navItems.filter(isNavItem).map((nav, index) => (
                  <motion.button
                    key={nav.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                    onClick={(e) => {
                      if (nav.external) {
                        window.open(nav.href, "_blank", "noopener,noreferrer");
                      } else {
                        e.preventDefault();
                        onSelect(nav.id);
                      }
                      setIsDrawerOpen(false);
                    }}
                    className={`w-full text-left text-base font-medium px-3 py-2 rounded-md transition-colors ${activeId === nav.id
                      ? "text-green-700 bg-green-50"
                      : "text-slate-700 hover:bg-slate-100"
                      }`}
                  >
                    {nav.name}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
