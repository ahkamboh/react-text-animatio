#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { program } from 'commander';

// Define the CLI tool version and description
program
  .version('1.0.0')
  .description('Animatio: CLI to add animations to your project');

// Command to initialize the animations folder
program
  .command('init')
  .description('Initialize the animations folder')
  .action(() => {
    const componentsDir = path.join(process.cwd(), 'src', 'components');
    const animationsDir = path.join(componentsDir, 'animatios');

    // Create src/components and animations directories if they don't exist
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

// Command to add a new animation component
program
  .command('add <animationName>')
  .description('Add an animation component')
  .action((animationName: string) => {
    const animationsDir = path.join(process.cwd(), 'src', 'components', 'animatios');
    const animationFile = path.join(animationsDir, `${animationName}.tsx`);

    // Check if the animations folder exists
    if (!fs.existsSync(animationsDir)) {
      console.log('Animatios folder not found. Run "npx animatio init" first.');
      return;
    }

    let templatePath: string;

    // Handle predefined animations or display an error if not found
    switch (animationName.toLowerCase()) {
      case 'animatedtext':
        templatePath = path.join(__dirname, 'templates', 'AnimatedText.tsx'); // Ensure template path is correct
        break;
      case 'sequentialtext':
        templatePath = path.join(__dirname, 'templates', 'SequentialText.tsx'); // Add sequentialtext case
        break;
      default:
        console.log(`Error: No predefined animation found for "${animationName}". Available animations: AnimatedText, SequentialText`);
        return;
    }

    // Verify if the template exists
    if (!fs.existsSync(templatePath)) {
      console.log(`Error: Template for "${animationName}" not found at ${templatePath}`);
      return;
    } else {
      console.log(`Template found at ${templatePath}`);
    }

    // Read the template file and create the animation component in the animations folder
    const animationCode = fs.readFileSync(templatePath, 'utf8')
      .replace(/CustomAnimation/g, animationName); // Replace placeholder with the actual animation name

    fs.writeFileSync(animationFile, animationCode);
    console.log(`${animationName} component added to src/components/animatios`);
  });

// Command to list predefined animations
program
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
program.parse(process.argv);
