#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const commander_1 = require("commander");
// Define the CLI tool version and description
commander_1.program
    .version('1.0.2')
    .description('Animatio: A React component package for creating dynamic text effects');
// Command to initialize the animations folder
commander_1.program
    .command('init')
    .description('Initialize the animations folder')
    .action(() => {
    const componentsDir = path_1.default.join(process.cwd(), 'src', 'components');
    const animationsDir = path_1.default.join(componentsDir, 'animatios');
    if (!fs_1.default.existsSync(componentsDir)) {
        fs_1.default.mkdirSync(componentsDir, { recursive: true });
    }
    if (!fs_1.default.existsSync(animationsDir)) {
        fs_1.default.mkdirSync(animationsDir);
        console.log('Animations folder created at src/components/animatios');
    }
    else {
        console.log('Animatios folder already exists');
    }
});
// List of available animations
const availableAnimations = [
    'CaptureText',
    'DanceDualText',
    'DanceText',
    'FlowingText',
    'GlideText',
    'LetterPopText',
    'SurgeText',
    'SwapText',
    'SwingText',
    'TwinkleText',
    'WordPopText',
    'SlitText'
];
// Command to add a new animation component
commander_1.program
    .command('add <animationName>')
    .description('Add an animation component')
    .action((animationName) => {
    const animationsDir = path_1.default.join(process.cwd(), 'src', 'components', 'animatios');
    const animationFile = path_1.default.join(animationsDir, `${animationName}.tsx`);
    if (!fs_1.default.existsSync(animationsDir)) {
        console.log('Animatios folder not found. Run "npx animatio init" first.');
        return;
    }
    if (!availableAnimations.includes(animationName)) {
        console.log(`Error: No predefined animation found for "${animationName}".`);
        console.log('Available animations:', availableAnimations.join(', '));
        return;
    }
    const templatePath = path_1.default.join(__dirname, 'templates', `${animationName}.tsx`);
    if (!fs_1.default.existsSync(templatePath)) {
        console.log(`Error: Template for "${animationName}" not found at ${templatePath}`);
        return;
    }
    const animationCode = fs_1.default.readFileSync(templatePath, 'utf8');
    fs_1.default.writeFileSync(animationFile, animationCode);
    console.log(`${animationName} component added to src/components/animatios`);
});
// Command to list predefined animations
commander_1.program
    .command('list')
    .description('List available predefined animations')
    .action(() => {
    console.log('Available predefined animations:');
    availableAnimations.forEach(animation => console.log(`- ${animation}`));
    console.log('\nTo add a predefined animation, use:');
    console.log('npx animatio add <animationName>');
});
// Parse and execute the commands
commander_1.program.parse(process.argv);
//# sourceMappingURL=cli.js.map