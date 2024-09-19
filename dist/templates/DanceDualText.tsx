// @animatio: https://github.com/ahkamboh/animatio
"use client"
import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface DanceDualTextProps {
  text: string[];
  className?: string;
  speed?: number;
  direction?: 'top' | 'bottom';
}
const DanceDualText: React.FC<DanceDualTextProps> = ({ text, className = '', speed = 0.7, direction = 'none' }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animateText = () => {
      if (textRef.current) {
        const currentText = text[currentIndex];
        textRef.current.innerHTML = currentText.replace(/\S/g, "<span class='inline-block opacity-0'>$&</span>");

        let translateYStart ,translateYEnd ;

        switch (direction) {
          case "top":
            translateYStart = 20;
            translateYEnd = -20;
            break;
          case "bottom":
            translateYStart = -20;
            translateYEnd = 20;
            break;
          default:
            translateYStart = 20;
            translateYEnd = -20;
        }
        anime.timeline({ loop: false })
          .add({
            targets: textRef.current.children,
            opacity: [0, 1],
            translateY: [translateYStart, 0],
            translateZ: 0,
            duration: 1000,
            delay: (_: any, i: number) => 50 * i,
            easing: 'easeOutExpo',
          })
          .add({
            targets: textRef.current.children,
            opacity: 0,
            translateY: [0, translateYEnd],
            duration: 1000,
            delay: (_: any, i: number) => 50 * i,
            easing: 'easeInExpo',
          }, '+=1000');
      }
    };

    animateText();
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 3000 / speed);

    return () => clearInterval(interval);
  }, [text, currentIndex, speed, direction]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={textRef} className="inline-block" />
    </div>
  );
};

export default DanceDualText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/