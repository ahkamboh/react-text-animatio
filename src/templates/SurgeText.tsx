// @animatio: https://github.com/ahkamboh/animatio
"use client";
import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";

interface SurgeTextProps {
  text: string[];
  speed?: number;
  className?: string;
}
const SurgeText: React.FC<SurgeTextProps> = ({ text, speed = 0.8, className = '' }) => {
  const [currentWordIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animateText = () => {
      if (textRef.current) {
        textRef.current.innerHTML = text[currentWordIndex].replace(
          /\S/g,
          `<span class='inline-block'>$&</span>`
        );
        anime.timeline({ loop: false })
          .add({
            targets: `.animated-text-2 .inline-block`,
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 750 /speed,
            easing: "easeOutExpo",
            delay: (_, i: number) => (50 * i)/speed
          })
          .add({
            targets: `.animated-text-2 .inline-block`,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
      
          });
          
      }
    };

    animateText();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 2750/speed);

    return () => clearInterval(interval);
  }, [currentWordIndex, text, speed, className]);

  return (
    <h1 className={`font-black text-4xl ${className} overflow-hidden pb-1`}>
      <span ref={textRef} className="animated-text-2"></span>
    </h1>
  );
};

export default SurgeText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/