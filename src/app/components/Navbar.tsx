'use client'
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      
      if (!hero) return;
      
      const heroBottom = hero.getBoundingClientRect().bottom;
      const shouldBeSticky = heroBottom <= 0;
      
      setIsSticky(prev => shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const linkClasses = (id: string) =>
    `hover:text-freshwater hover:scale-110 px-4 transition-all ${
      activeSection === id ? 'text-athenablue font-bold' : 'text-slate-500'
    }`;

  return (
    <nav className={`w-full z-50 shadow-xl bg-slate-900 transition-all duration-300 ${
      isSticky ? 'fixed top-0' : 'relative'
    }`}>
      <div className="max-w-screen mx-auto w-full">
        <ul className="flex p-4 justify-center md:justify-evenly md:text-xl font-bold">
          <li><a className={linkClasses("hero")} href="#hero">Home</a></li>
          <li><a className={linkClasses("about")} href="#about">About</a></li>
          <li><a className={linkClasses("education")} href="#education">Education</a></li>
          <li><a className={linkClasses("projects")} href="#projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}