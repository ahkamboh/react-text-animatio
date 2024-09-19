// @animatio: https://github.com/ahkamboh/animatio
"use client"
import React, { useEffect, useRef } from "react";
import anime from "animejs";

interface WordPopTextProps {
  text: string[];
  className?: string;
  speed?: number;
}

  const WordPopText: React.FC<WordPopTextProps> = ({text, className = '' , speed=1}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationConfig = {
      opacityIn: [0, 1],
      scaleIn: [0.2, 1],
      scaleOut: 3,
      durationIn: 800/speed,
      durationOut: 600/speed,
      delay: 500
    };

    const timeline = anime.timeline({ loop: true });

    text.forEach((phrase, index) => {
      const wordClass = `word-${index + 1}`;
      
      timeline
        .add({
          targets: `.${wordClass}`,
          opacity: animationConfig.opacityIn,
          scale: animationConfig.scaleIn,
          duration: animationConfig.durationIn
        })
        .add({
          targets: `.${wordClass}`,
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
        {text.map((phrase, index) => (
          <span key={index} className={`word-${index + 1} absolute`}>
            {phrase.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2">{word}</span>
            ))}
          </span>
        ))}
      </div>
    </h1>
  );
};

export default WordPopText;

/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/