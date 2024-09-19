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
const WordPopText = ({ text, className = '', speed = 1 }) => {
    const textRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const animationConfig = {
            opacityIn: [0, 1],
            scaleIn: [0.2, 1],
            scaleOut: 3,
            durationIn: 800 / speed,
            durationOut: 600 / speed,
            delay: 500
        };
        const timeline = animejs_1.default.timeline({ loop: true });
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
    return (react_1.default.createElement("h1", { className: `font-black text-5xl ${className} relative` },
        react_1.default.createElement("div", { ref: textRef, className: "ml4 relative" }, text.map((phrase, index) => (react_1.default.createElement("span", { key: index, className: `word-${index + 1} absolute` }, phrase.split(' ').map((word, wordIndex) => (react_1.default.createElement("span", { key: wordIndex, className: "inline-block mr-2" }, word)))))))));
};
exports.default = WordPopText;
/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/ 
//# sourceMappingURL=WordPopText.js.map