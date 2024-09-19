// @animatio: https://github.com/ahkamboh/animatio
"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface TwinkleTextProps {
  text: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

const TwinkleText: React.FC<TwinkleTextProps> = ({ text, speed = 0.4, direction = "none", className = "" }) => {
  const textWrapperRef = useRef<HTMLSpanElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animateText = () => {
      const textWrapper = textWrapperRef.current;
      if (textWrapper) {
        textWrapper.innerHTML = text[currentIndex]
          .replace(/\S/g, "<span class='inline-block leading-none letter23'>$&</span>");
        
        let animationProps;
        switch (direction) {
          case "left":
            animationProps = { translateX: [-90, 0] };
            break;
          case "right":
            animationProps = { translateX: [90, 0] };
            break;
          default:
            animationProps = { rotateY: [-90, 0] };
        }

        anime.timeline({ loop: false })
          .add({
            targets: '.letter23',
            ...animationProps,
            duration: 950 / speed,
            delay: (el: any, i: number) => 50 * i
          }).add({
            targets: '.ml44',
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
    <h1 className={`relative font-black text-4xl ml44 ${className}`}>
      <span
        className="relative inline-block pr-0.5 py-4 overflow-hidden"
        ref={textWrapperRef}
      >
        <span className="letters">{text[currentIndex]}</span>
      </span>
    </h1>
  );
};

export default TwinkleText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/