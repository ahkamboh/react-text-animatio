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
const LetterPopText = ({ text, speed = 0.8, className = '' }) => {
    const [currentWordIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const textRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const animateText = () => {
            if (textRef.current) {
                textRef.current.innerHTML = text[currentWordIndex].replace(/\S/g, `<span class='inline-block'>$&</span>`);
                animejs_1.default.timeline({ loop: false })
                    .add({
                    targets: `.animated-text-20 .inline-block`,
                    opacity: [0, 1],
                    scale: [0.2, 1],
                    duration: 800 / speed,
                })
                    .add({
                    targets: `.animated-text-20 .inline-block`,
                    opacity: 0,
                    scale: 3,
                    easing: "easeInExpo",
                    duration: 600 / speed,
                    delay: 500 / speed
                });
            }
        };
        animateText();
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, 2050 / speed);
        return () => clearInterval(interval);
    }, [currentWordIndex, text, speed, className]);
    return (react_1.default.createElement("h1", { className: `font-black text-4xl ${className}  pb-1` },
        react_1.default.createElement("span", { ref: textRef, className: "animated-text-20" })));
};
exports.default = LetterPopText;
/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/ 
//# sourceMappingURL=LetterPopText.js.map