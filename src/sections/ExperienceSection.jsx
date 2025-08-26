import { useEffect, useRef } from 'react';
import TitleHeader from '../components/TitleHeader';
import { expCards } from '../constants';
import GlowCard from '../components/GlowCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const timelineRefs = useRef([]);
  const logoRefs = useRef([]);

  useEffect(() => {
    timelineRefs.current.forEach((el, index) => {
      if (!el) return;

      const logo = logoRefs.current[index];

      // initial state
      gsap.set([el, logo], { opacity: 0 });
      gsap.set(el, { transformOrigin: "top center", scaleY: 0 });
      gsap.set(logo, { y: 50, scale: 0.8 });

      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "70% center",
        scrub: 0.5,
        onUpdate: (self) => {
          // line animate
          gsap.to(el, {
            scaleY: self.progress,
            opacity: self.progress,
            ease: "none",
            overwrite: "auto",
          });

          // logo animate
          gsap.to(logo, {
            y: 0,
            scale: 1,
            opacity: self.progress,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    });
  }, []);

  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-paddin xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title="The Details You Need to Know" sub="My Carrier Overview"/>

        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {expCards.map((card, index) => (
              <div key={card.title} className='exp-card-wrapper'>
                <div className='hello xl:w-2/6'>
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>
                <div className='xl:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper'>
                      <div
                        ref={(el) => (timelineRefs.current[index] = el)}
                        className='gradient-line w-1 h-full'
                      />
                    </div>

                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                      <div
                        className='timeline-logo'
                        ref={(el) => (logoRefs.current[index] = el)}
                      >
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className='font-semibold text-3xl'>{card.title}</h1>
                        <p className='my-5 text-white-50'>{card.date}</p>
                        <p className='text-[#839cb5] italic'>Responsibilities</p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className='text-lg'>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
