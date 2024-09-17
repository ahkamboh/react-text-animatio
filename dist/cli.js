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
    .version('1.0.0')
    .description('Animatio: CLI to add animations to your project');
// Command to initialize the animations folder
commander_1.program
    .command('init')
    .description('Initialize the animations folder')
    .action(() => {
    const componentsDir = path_1.default.join(process.cwd(), 'src', 'components');
    const animationsDir = path_1.default.join(componentsDir, 'animatios');
    // Create src/components and animations directories if they don't exist
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
// Command to add a new animation component
commander_1.program
    .command('add <animationName>')
    .description('Add an animation component')
    .action((animationName) => {
    const animationsDir = path_1.default.join(process.cwd(), 'src', 'components', 'animatios');
    const animationFile = path_1.default.join(animationsDir, `${animationName}.tsx`);
    // Check if the animations folder exists
    if (!fs_1.default.existsSync(animationsDir)) {
        console.log('Animatios folder not found. Run "npx animatio init" first.');
        return;
    }
    let templatePath;
    // Handle predefined animations or display an error if not found
    switch (animationName.toLowerCase()) {
        case 'animatedtext':
            templatePath = path_1.default.join(__dirname, 'templates', 'AnimatedText.tsx'); // Ensure template path is correct
            break;
        case 'sequentialtext':
            templatePath = path_1.default.join(__dirname, 'templates', 'SequentialText.tsx'); // Add sequentialtext case
            break;
        default:
            console.log(`Error: No predefined animation found for "${animationName}". Available animations: AnimatedText, SequentialText`);
            return;
    }
    // Verify if the template exists
    if (!fs_1.default.existsSync(templatePath)) {
        console.log(`Error: Template for "${animationName}" not found at ${templatePath}`);
        return;
    }
    else {
        console.log(`Template found at ${templatePath}`);
    }
    // Read the template file and create the animation component in the animations folder
    const animationCode = fs_1.default.readFileSync(templatePath, 'utf8')
        .replace(/CustomAnimation/g, animationName); // Replace placeholder with the actual animation name
    fs_1.default.writeFileSync(animationFile, animationCode);
    console.log(`${animationName} component added to src/components/animatios`);
});
// Command to list predefined animations
commander_1.program
    .command('list')
    .description('List available predefined animations')
    .action(() => {
    console.log('Available predefined animations:');
    console.log('- AnimatedText');
    console.log('- SequentialText');
    console.log('\nTo add a predefined animation, use:');
    console.log('npx animatio add animationName');
});
// Parse and execute the commands
commander_1.program.parse(process.argv);
