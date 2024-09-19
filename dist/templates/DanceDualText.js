"use strict";
// @animatio: https://github.com/ahkamboh/animatio
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const animejs_1 = __importDefault(require("animejs"));
const DanceDualText = ({ text, className = '', speed = 0.7, direction = 'none' }) => {
    const textRef = (0, react_1.useRef)(null);
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const animateText = () => {
            if (textRef.current) {
                const currentText = text[currentIndex];
                textRef.current.innerHTML = currentText.replace(/\S/g, "<span class='inline-block opacity-0'>$&</span>");
                let translateYStart, translateYEnd;
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
                animejs_1.default.timeline({ loop: false })
                    .add({
                    targets: textRef.current.children,
                    opacity: [0, 1],
                    translateY: [translateYStart, 0],
                    translateZ: 0,
                    duration: 1000,
                    delay: (_, i) => 50 * i,
                    easing: 'easeOutExpo',
                })
                    .add({
                    targets: textRef.current.children,
                    opacity: 0,
                    translateY: [0, translateYEnd],
                    duration: 1000,
                    delay: (_, i) => 50 * i,
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
    return (react_1.default.createElement("div", { className: `overflow-hidden ${className}` },
        react_1.default.createElement("div", { ref: textRef, className: "inline-block" })));
};
exports.default = DanceDualText;
/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/ 
//# sourceMappingURL=DanceDualText.js.map