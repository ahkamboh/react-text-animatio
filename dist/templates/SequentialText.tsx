"use client";
import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";

interface SequentialTextProps {
  text: string[];
  speed?: number;
  className?: string; // Optional className prop for customization
}

const SequentialText: React.FC<SequentialTextProps> = ({
  text,
  speed = 1,
  className = '',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const textWrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textWrapperRef.current && text.length > 0) {
      const textWrapper = textWrapperRef.current;

      // Apply the className to each individual letter
      textWrapper.innerHTML = text[currentWordIndex].replace(
        /\S/g,
        `<span class='inline-block leading-none letter ${className}'>$&</span>`
      );

      // Animate letters
      anime.timeline({ loop: false })
        .add({
          targets: '.letter',
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 750 / speed,
          delay: (el: any, i: number) => 50 * i
        }).add({
          targets: textWrapper,
          opacity: 1,
          duration: 0,
          complete: () => {
            // Update to the next word after the animation completes
            setTimeout(() => {
              setCurrentWordIndex((prevIndex) => (prevIndex + 1) % text.length);
            }, 1000);
          }
        });
    }
  }, [currentWordIndex, text, speed, className]);

  return (
    <h1 className={`relative font-black text-5xl ${className}`}>
      <span
        className="relative inline-block pt-1 pr-0.5 pb-1 overflow-hidden"
        ref={textWrapperRef}
      >
        <span className="letters">{text[currentWordIndex]}</span>
      </span>
    </h1>
  );
};

export default SequentialText;
