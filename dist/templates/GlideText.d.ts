import React from "react";
interface GlideTextProps {
    text: string[];
    speed?: number;
    direction?: "vertical" | "horizontal" | "top" | "bottom" | "left" | "right";
    className?: string;
}
declare const GlideText: React.FC<GlideTextProps>;
export default GlideText;
