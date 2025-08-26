import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "On-demand Rides Made Simple With Ride App",
    description: "An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.",
    img: "/images/project1.png",
  },
  {
    title: "Library Management Platform",
    description: "A web platform to manage library operations efficiently.",
    img: "/images/project2.png",
  },
  {
    title: "YC Directory - A Showcase App",
    description: "A curated showcase app built for learning and experimentation.",
    img: "/images/project3.png",
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade in the whole section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate each project card
    projectRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase py-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-white">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-card bg-zinc-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="image-wrapper w-full h-64">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-white">{project.title}</h2>
                <p className="text-white-50">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
