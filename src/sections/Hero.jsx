import React from "react";
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Register GSAP plugin safely
gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    if (typeof window !== "undefined" && document.querySelector(".hero-text h1")) {
      gsap.fromTo(".hero-text h1",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.25, duration: 1.8, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);
  

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-25 px-10">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Priyanshu, a developer whose "Code is canvas & creativity is
              compiler".
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <figure>
          {/* <div className="hero-3d-layout"> */}
            {/* <HeroExperience /> */}
            
          {/* </div> */}
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
