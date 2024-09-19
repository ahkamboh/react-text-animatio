// @animatio: https://github.com/ahkamboh/animatio
"use client"
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface SlitTextProps {
  text: string[];
  className?: string;
  speed?: number; 
}

const SlitText: React.FC<SlitTextProps> = ({ text, className = '', speed = 0.7 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRefs = useRef<HTMLSpanElement>(null);

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
      if (textRefs.current) {
        const timeline = anime.timeline({ loop: false });

        timeline
          .add({
            targets: textRefs.current.children,
            opacity: animationConfig.opacityIn,
            scale: animationConfig.scaleIn,
            duration: animationConfig.durationIn,
            easing: 'easeOutExpo',
            delay: anime.stagger(100 / speed)
          })
          .add({
            targets: textRefs.current.children,
            opacity: 0,
            scale: animationConfig.scaleOut,
            duration: animationConfig.durationOut,
            easing: "easeInExpo",
            delay: animationConfig.delay
          })
         
      }
    };

    animateText();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 2500 / speed);

    return () => clearInterval(interval);
  }, [currentIndex, text, speed]);
  return (
    <h1 className={` font-black text-4xl  ${className}`}>
      <span ref={textRefs} >
        {text[currentIndex].split('').map((char, index) => (
          <span key={index} >{char}</span>
        ))}
      </span>
    </h1>
  );
};

export default SlitText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/