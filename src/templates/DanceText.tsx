// @animatio: https://github.com/ahkamboh/animatio
"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface DanceTextProps {
  text: string[];
  speed?: number;
  direction?: "top" | "bottom";
  className?: string;
}
const DanceText: React.FC<DanceTextProps> = ({ text, speed = 0.5, direction = "none", className = "" }) => {
  const textWrapperRef = useRef<HTMLSpanElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animateText = () => {
      const textWrapper = textWrapperRef.current;
      if (textWrapper) {
        textWrapper.innerHTML = text[currentIndex]
          .replace(/\S/g, "<span class='inline-block leading-none letter230'>$&</span>");
        
        let animationProps;
        switch (direction) {
          case "top":
            animationProps = { translateY: [-90, 0] };
            break;
          case "bottom":
            animationProps = { translateY: [90, 0] };
            break;
          default:
            animationProps = { translateY: [90, 0] };
        }
        anime.timeline({ loop: false })
          .add({
            targets: '.letter230',
            ...animationProps,
            duration: 950 / speed,
            delay: (el: any, i: number) => 50 * i
          }).add({
            targets: '.ml440',
            duration: 2000,
            easing: "easeOutExpo",
            delay: (el: any, i: number) => 50 * i + 1000
          });
      }
    };

    animateText();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 1350 / speed);

    return () => clearInterval(interval);
  }, [text, currentIndex, speed, direction]);

  return (
    <h1 className={`relative font-black text-4xl ml440 ${className}`}>
      <span
        className="relative inline-block pr-0.5 py-4 overflow-hidden"
        ref={textWrapperRef}
      >
        <span className="letters">{text[currentIndex]}</span>
      </span>
    </h1>
  );
};

export default DanceText;
/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/