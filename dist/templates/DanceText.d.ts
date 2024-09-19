import React from "react";
interface DanceTextProps {
    text: string[];
    speed?: number;
    direction?: "top" | "bottom";
    className?: string;
}
declare const DanceText: React.FC<DanceTextProps>;
export default DanceText;
