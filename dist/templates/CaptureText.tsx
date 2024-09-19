// @animatio: https://github.com/ahkamboh/animatio
"use client";
import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";

interface CaptureTextProps {
  text: string[];
  speed?: number;
  className?: string;
}
const CaptureText: React.FC<CaptureTextProps> = ({ text, speed = 0.7, className = '' }) => {
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
            targets: `.animated-text .inline-block`,
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950 / speed,
            delay: (el: any, i: number) => (70 / speed) * i
          })
          .add({
            targets: `.animated-text .inline-block`,
            opacity: 0,
            duration: 1000 ,
            easing: "easeOutExpo",
            delay: 1000 ,
      
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
    <h1 className={`font-black text-4xl ${className}`}>
      <span ref={textRef} className="animated-text"></span>
    </h1>
  );
};

export default CaptureText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/