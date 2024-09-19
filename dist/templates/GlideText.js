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
const GlideText = ({ text, speed = 1, direction = "vertical", className = '' }) => {
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const textRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const animateText = () => {
            if (textRef.current) {
                let translateIn, translateOut;
                switch (direction) {
                    case "top":
                        translateIn = [20, 0];
                        translateOut = -20;
                        break;
                    case "bottom":
                        translateIn = [-20, 0];
                        translateOut = 20;
                        break;
                    case "left":
                        translateIn = [20, 0];
                        translateOut = -20;
                        break;
                    case "right":
                        translateIn = [-20, 0];
                        translateOut = 20;
                        break;
                    case "horizontal":
                        translateIn = [20, 0];
                        translateOut = -20;
                        break;
                    case "vertical":
                    default:
                        translateIn = [20, 0];
                        translateOut = -20;
                        break;
                }
                animejs_1.default.timeline({ loop: false })
                    .add({
                    targets: textRef.current,
                    opacity: [0, 1],
                    translateY: direction === "top" || direction === "bottom" || direction === "vertical" ? translateIn : 0,
                    translateX: direction === "left" || direction === "right" || direction === "horizontal" ? translateIn : 0,
                    easing: "easeOutExpo",
                    duration: 1000 / speed
                })
                    .add({
                    targets: textRef.current,
                    opacity: 0,
                    translateY: direction === "top" || direction === "bottom" || direction === "vertical" ? translateOut : 0,
                    translateX: direction === "left" || direction === "right" || direction === "horizontal" ? translateOut : 0,
                    easing: "easeInExpo",
                    duration: 1000 / speed,
                });
            }
        };
        animateText();
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, 2000 / speed);
        return () => clearInterval(interval);
    }, [currentIndex, text, speed, direction]);
    return (react_1.default.createElement("h1", { className: `font-black  text-4xl  relative overflow-hidden` },
        react_1.default.createElement("span", { ref: textRef, className: `inline-block ${className}` }, text[currentIndex])));
};
exports.default = GlideText;
/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/
//# sourceMappingURL=GlideText.js.map