import React from "react";
interface TwinkleTextProps {
    text: string[];
    speed?: number;
    direction?: "left" | "right";
    className?: string;
}
declare const TwinkleText: React.FC<TwinkleTextProps>;
export default TwinkleText;
