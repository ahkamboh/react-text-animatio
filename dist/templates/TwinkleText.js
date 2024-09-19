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
const TwinkleText = ({ text, speed = 0.4, direction = "none", className = "" }) => {
    const textWrapperRef = (0, react_1.useRef)(null);
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const animateText = () => {
            const textWrapper = textWrapperRef.current;
            if (textWrapper) {
                textWrapper.innerHTML = text[currentIndex]
                    .replace(/\S/g, "<span class='inline-block leading-none letter23'>$&</span>");
                let animationProps;
                switch (direction) {
                    case "left":
                        animationProps = { translateX: [-90, 0] };
                        break;
                    case "right":
                        animationProps = { translateX: [90, 0] };
                        break;
                    default:
                        animationProps = { rotateY: [-90, 0] };
                }
                animejs_1.default.timeline({ loop: false })
                    .add({
                    targets: '.letter23',
                    ...animationProps,
                    duration: 950 / speed,
                    delay: (el, i) => 50 * i
                }).add({
                    targets: '.ml44',
                    duration: 2000,
                    easing: "easeOutExpo",
                    delay: (el, i) => 50 * i + 1000
                });
            }
        };
        animateText();
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, 1350 / speed);
        return () => clearInterval(interval);
    }, [text, currentIndex, speed, direction]);
    return (react_1.default.createElement("h1", { className: `relative font-black text-4xl ml44 ${className}` },
        react_1.default.createElement("span", { className: "relative inline-block pr-0.5 py-4 overflow-hidden", ref: textWrapperRef },
            react_1.default.createElement("span", { className: "letters" }, text[currentIndex]))));
};
exports.default = TwinkleText;
/*creator:@ahkamboh(Ali Hamza Kamboh)
Site : https://alihamzakamboh.com
Twitter: https://twitter.com/alihamzakambohh
GitHub: https://github.com/ahkamboh
LinkedIn: https://www.linkedin.com/in/ahkamboh/*/ 
//# sourceMappingURL=TwinkleText.js.map