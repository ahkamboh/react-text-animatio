// @animatio: https://github.com/ahkamboh/animatio
"use client"
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface FlowingTextProps {
  text: string[];
  className?: string;
  speed?: number; 
}

const FlowingText: React.FC<FlowingTextProps> = ({ text, className = '', speed = 0.7 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animationConfig = {
      opacityIn: [0, 1],
      scaleIn: [0.2, 1],
      scaleOut: 3,
      durationIn: 800 / speed,
      durationOut: 600 / speed,
      delay: 500 / speed
    };

    const animateText = () => {
      if (textRef.current) {
        const timeline = anime.timeline({ loop: false });

        timeline
          .add({
            targets: textRef.current.children,
            opacity: animationConfig.opacityIn,
            scale: animationConfig.scaleIn,
            duration: animationConfig.durationIn,
            easing: 'easeOutExpo',
            delay: anime.stagger(100 / speed)
          })
          .add({
            targets: textRef.current.children,
            opacity: 0,
            scale: animationConfig.scaleOut,
            duration: animationConfig.durationOut,
            easing: "easeInExpo",
            delay: animationConfig.delay
          })
          .finished.then(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
          });
      }
    };

    animateText();
  }, [currentIndex, text, speed]);
  return (
    <h1 className={`font-black text-5xl ${className}`}>
      <span ref={textRef} className="inline-block space-x-2">
        {text[currentIndex].split('').map((char, index) => (
          <span key={index} className="inline-block ">{char}</span>
        ))}
      </span>
    </h1>
  );
};

export default FlowingText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/