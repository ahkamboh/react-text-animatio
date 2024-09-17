"use strict";
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
const SequentialText = ({ text, speed = 1, className = '', }) => {
    const [currentWordIndex, setCurrentWordIndex] = (0, react_1.useState)(0);
    const textWrapperRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (textWrapperRef.current && text.length > 0) {
            const textWrapper = textWrapperRef.current;
            // Apply the className to each individual letter
            textWrapper.innerHTML = text[currentWordIndex].replace(/\S/g, `<span class='inline-block leading-none letter ${className}'>$&</span>`);
            // Animate letters
            animejs_1.default.timeline({ loop: false })
                .add({
                targets: '.letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750 / speed,
                delay: (el, i) => 50 * i
            }).add({
                targets: textWrapper,
                opacity: 1,
                duration: 0,
                complete: () => {
                    // Update to the next word after the animation completes
                    setTimeout(() => {
                        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % text.length);
                    }, 1000);
                }
            });
        }
    }, [currentWordIndex, text, speed, className]);
    return (react_1.default.createElement("h1", { className: `relative font-black text-5xl ${className}` },
        react_1.default.createElement("span", { className: "relative inline-block pt-1 pr-0.5 pb-1 overflow-hidden", ref: textWrapperRef },
            react_1.default.createElement("span", { className: "letters" }, text[currentWordIndex]))));
};
exports.default = SequentialText;
