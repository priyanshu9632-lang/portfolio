import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants/index";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      const obj = { val: 0 };

      gsap.to(obj, {
        val: item.value,
        duration: 2.5,
        ease: "power3.out",
        onUpdate: () => {
          numberElement.textContent = Math.floor(obj.val) + item.suffix;
        },
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });
    });

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => clearTimeout(refreshTimeout);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      {/* Responsive Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center text-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
