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
const SwapText = ({ text, speed = 1, className = '' }) => {
    const textRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (textRef.current) {
            const textWrapper = textRef.current;
            let currentTextIndex = 0;
            const animateText = () => {
                textWrapper.innerHTML = text[currentTextIndex].replace(/\S/g, "<span class='letter2'>$&</span>");
                animejs_1.default.timeline({ loop: false })
                    .add({
                    targets: '.letter2',
                    translateY: ["1.1em", 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 750 / speed,
                    delay: (el, i) => 50 * i
                }).add({
                    targets: '.letter2',
                    opacity: 0,
                    duration: 1500 / speed,
                    easing: 'easeInOutQuad',
                    delay: (el, i) => 50 * i + 1000
                });
                currentTextIndex = (currentTextIndex + 1) % text.length;
            };
            animateText();
            const interval = setInterval(animateText, 4000 / speed);
            return () => clearInterval(interval);
        }
    }, [text, speed]);
    return (react_1.default.createElement("div", { ref: textRef, className: ` font-black text-4xl  ${className}` }));
};
exports.default = SwapText;
/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/
//# sourceMappingURL=SwapText.js.map