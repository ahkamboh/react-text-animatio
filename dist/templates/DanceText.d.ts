import React from "react";
interface DripTextProps {
    text: string[];
    speed?: number;
    direction?: "top" | "bottom";
    className?: string;
}
declare const DripText: React.FC<DripTextProps>;
export default DripText;
