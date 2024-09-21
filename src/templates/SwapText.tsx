// @animatio: https://github.com/ahkamboh/animatio
"use client";
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
interface SwapTextProps {
  text: string[];
  speed?: number;
  className?: string;
}
const SwapText: React.FC<SwapTextProps> = ({ text, speed = 1, className = '' }) => {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (textRef.current) {
      const textWrapper = textRef.current;
      let currentTextIndex = 0;

      const animateText = () => {
        textWrapper.innerHTML = text[currentTextIndex].replace(/\S/g, "<span class='letter2'>$&</span>");

        anime.timeline({ loop: false })
        .add({
          targets: '.letter2',
          translateY: ["1.1em", 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 750 / speed,
          delay: (_, i: number) => 50 * i
        }).add({
          targets: '.letter2',
          opacity: 0,
          duration: 1500 / speed,
          easing: 'easeInOutQuad',
          delay: (_, i: number) => 50 * i + 1000
        });
        currentTextIndex = (currentTextIndex + 1) % text.length;
      };
      animateText();
      const interval = setInterval(animateText, 4000/speed); 
      return () => clearInterval(interval);
    }
  }, [text, speed]);

  return (
    <div ref={textRef} className={` font-black text-4xl  ${className}`}></div>
  );
};

export default SwapText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/
