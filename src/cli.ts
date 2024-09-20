#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { program } from 'commander';

// Define the CLI tool version and description
program
  .version('1.0.1')
  .description('Animatio: A React component package for creating dynamic text effects');

// Command to initialize the animations folder
program
  .command('init')
  .description('Initialize the animations folder')
  .action(() => {
    const componentsDir = path.join(process.cwd(), 'src', 'components');
    const animationsDir = path.join(componentsDir, 'animatios');

    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }

    if (!fs.existsSync(animationsDir)) {
      fs.mkdirSync(animationsDir);
      console.log('Animations folder created at src/components/animatios');
    } else {
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
program
  .command('add <animationName>')
  .description('Add an animation component')
  .action((animationName: string) => {
    const animationsDir = path.join(process.cwd(), 'src', 'components', 'animatios');
    const animationFile = path.join(animationsDir, `${animationName}.tsx`);

    if (!fs.existsSync(animationsDir)) {
      console.log('Animatios folder not found. Run "npx animatio init" first.');
      return;
    }

    if (!availableAnimations.includes(animationName)) {
      console.log(`Error: No predefined animation found for "${animationName}".`);
      console.log('Available animations:', availableAnimations.join(', '));
      return;
    }

    const templatePath = path.join(__dirname, 'templates', `${animationName}.tsx`);

    if (!fs.existsSync(templatePath)) {
      console.log(`Error: Template for "${animationName}" not found at ${templatePath}`);
      return;
    }

    const animationCode = fs.readFileSync(templatePath, 'utf8');

    fs.writeFileSync(animationFile, animationCode);
    console.log(`${animationName} component added to src/components/animatios`);
  });

// Command to list predefined animations
program
  .command('list')
  .description('List available predefined animations')
  .action(() => {
    console.log('Available predefined animations:');
    availableAnimations.forEach(animation => console.log(`- ${animation}`));
    console.log('\nTo add a predefined animation, use:');
    console.log('npx animatio add <animationName>');
  });

// Parse and execute the commands
program.parse(process.argv);