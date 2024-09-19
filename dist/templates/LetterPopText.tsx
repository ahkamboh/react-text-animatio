// @animatio: https://github.com/ahkamboh/animatio
"use client";
import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";

interface LetterPopTextProps {
  text: string[];
  speed?: number;
  className?: string;
}
const LetterPopText: React.FC<LetterPopTextProps> = ({ text, speed = 0.8, className = '' }) => {
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
            targets: `.animated-text-20 .inline-block`,
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800 / speed,
          })
          .add({
            targets: `.animated-text-20 .inline-block`,
            opacity: 0,
            scale: 3,
            easing: "easeInExpo",
            duration: 600 / speed,
            delay: 500/speed
      
          });
          
      }
    };

    animateText();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 2050/speed);

    return () => clearInterval(interval);
  }, [currentWordIndex, text, speed, className]);

  return (
    <h1 className={`font-black text-4xl ${className}  pb-1`}>
      <span ref={textRef} className="animated-text-20"></span>
    </h1>
  );
};

export default LetterPopText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/