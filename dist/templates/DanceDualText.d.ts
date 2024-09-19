import React from 'react';
interface DanceDualTextProps {
    text: string[];
    className?: string;
    speed?: number;
    direction?: 'top' | 'bottom';
}
declare const DanceDualText: React.FC<DanceDualTextProps>;
export default DanceDualText;
