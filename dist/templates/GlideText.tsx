// @animatio: https://github.com/ahkamboh/animatio
"use client";
import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";

interface GlideTextProps {
  text: string[];
  speed?: number;
  direction?: "vertical" | "horizontal" | "top" | "bottom" | "left" | "right";
  className?: string;
}
const GlideText: React.FC<GlideTextProps> = ({ text, speed = 1, direction = "vertical", className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const animateText = () => {
      if (textRef.current) {
        let translateIn, translateOut;

        switch (direction) {
          case "top":
            translateIn = [20, 0];
            translateOut = -20;
            break;
          case "bottom":
            translateIn = [-20, 0];
            translateOut = 20;
            break;
          case "left":
            translateIn = [20, 0];
            translateOut = -20;
            break;
          case "right":
            translateIn = [-20, 0];
            translateOut = 20;
            break;
          case "horizontal":
            translateIn = [20, 0];
            translateOut = -20;
            break;
          case "vertical":
          default:
            translateIn = [20, 0];
            translateOut = -20;
            break;
        }

        anime.timeline({ loop: false })
          .add({
            targets: textRef.current,
            opacity: [0, 1],
            translateY: direction === "top" || direction === "bottom" || direction === "vertical" ? translateIn : 0,
            translateX: direction === "left" || direction === "right" || direction === "horizontal" ? translateIn : 0,
            easing: "easeOutExpo",
            duration: 1000 / speed
          })
          .add({
            targets: textRef.current,
            opacity: 0,
            translateY: direction === "top" || direction === "bottom" || direction === "vertical" ? translateOut : 0,
            translateX: direction === "left" || direction === "right" || direction === "horizontal" ? translateOut : 0,
            easing: "easeInExpo",
            duration: 1000 / speed,
          });
      }
    };

    animateText();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 2000 / speed);

    return () => clearInterval(interval);
  }, [currentIndex, text, speed, direction]);

  return (
    <h1 className={`font-black  text-4xl  relative overflow-hidden`}>
      <span ref={textRef} className={`inline-block ${className}`}>
        {text[currentIndex]}
      </span>
    </h1>
  );
};

export default GlideText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/
