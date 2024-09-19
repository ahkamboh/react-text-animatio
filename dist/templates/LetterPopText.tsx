// @animatio: https://github.com/ahkamboh/animatio
"use client"
import React, { useEffect, useRef } from "react";
import anime from "animejs";

interface LetterPopTextProps {
  text: string[];
  className?: string;
  speed?: number;
}

  const LetterPopText: React.FC<LetterPopTextProps> = ({text, className = '', speed = 1}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationConfig = {
      opacityIn: [0, 1],
      scaleIn: [0.2, 1],
      scaleOut: 3,
      durationIn: 800 / speed,
      durationOut: 600 / speed,
      delay: 500
    };

    const timeline = anime.timeline({ loop: true });

    text.forEach((word, index) => {
      const letterClass = `letters-${index + 1}`;

      timeline
        .add({
          targets: `.${letterClass} .letter`,
          opacity: animationConfig.opacityIn,
          scale: animationConfig.scaleIn,
          duration: animationConfig.durationIn
        })
        .add({
          targets: `.${letterClass} .letter`,
          opacity: 0,
          scale: animationConfig.scaleOut,
          duration: animationConfig.durationOut,
          easing: "easeInExpo",
          delay: animationConfig.delay
        });
    });

    return () => {
      timeline.pause();
    };
  }, [text]);

  return (
    <h1 className={`font-black text-5xl ${className} relative`}>
      <div ref={textRef} className="ml4 relative">
        {text.map((word, index) => (
          <span key={index} className={`letters-${index + 1} absolute left-0 top-0 w-full`}>
            {word.split(/(\s+)/).map((part, partIndex) => (
              part.match(/\s+/) ? (
                <span key={partIndex} className="inline-block">&nbsp;</span>
              ) : (
                part.split('').map((letter, letterIndex) => (
                  <span key={`${partIndex}-${letterIndex}`} className="letter inline-block">{letter}</span>
                ))
              )
            ))}
          </span>
        ))}
      </div>
    </h1>
  );
};

export default LetterPopText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/
