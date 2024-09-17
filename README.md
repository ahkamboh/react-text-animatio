# Animatio

A React component package for creating text effects and images. Customize your text animation effortlessly with customizable classNames for styling.

## Installation

To install the package, run the following command in your Next.js or React project:

### 1.Step

```bash
    npm i animatio@latest
```
### 2.Step

```bash
   npx animatio init
```

### 3.Step

```bash
   npx animatio add < animation name >
   #Example 
   npx animatio add SequentialText
```
## Components

### 1. SequentialText

The `SequentialText` component animates words sequentially, where each letter is animated as it appears on the screen.

#### Usage
```bash
   npx animatio add SequentialText
```
### Example 

```tsx

import SequentialText from "@/components/animatios/SequentialText";

<SequentialText
      text={['Hello', 'World', 'Welcome to Animatio!']}
      speed={0.8} // Optional: Controls animation speed (default is 0.8)
      className="text-blue-500 text-4xl bg-yellow-200 p-2" // Optional: Apply custom styles
    />
  
```

#### Props

- `text` (required): An array of strings representing the words to animate sequentially.
- `speed` (optional): A number controlling the animation speed (default: `0.8`).
- `className` (optional): Custom CSS classes to style the animated text.

#### Default Speed

- The default speed for the `SequentialText` component is `0.8`.

### 2. AnimatedText

The `AnimatedText` component animates words by scaling and fading in each letter, one after another.

#### Usage
```bash
   npx animatio add AnimatedText
```
### Example 

```tsx
   import AnimatedText from "@/components/animatios/AnimatedText";

    <AnimatedText
      text={['React', 'Animation', 'Made Simple']}
      speed={0.6} // Optional: Controls animation speed (default is 0.6)
      className="text-red-500 text-3xl" // Optional: Apply custom styles
    />

```

#### Props

- `text` (required): An array of strings representing the words to animate.
- `speed` (optional): A number controlling the animation speed (default: `0.6`).
- `className` (optional): Custom CSS classes to style the animated text.

#### Default Speed

- The default speed for the `AnimatedText` component is `0.6`.

## Customization

You can use the `className` prop to pass in custom styles to both `SequentialText` and `AnimatedText`. These styles are applied to each letter within the animation. This allows you to fully control the appearance, including font size, color, background color, padding, and more.

For example:

```tsx
<AnimatedText
  text={['Customizable', 'Text']}
  className="text-green-500 bg-gray-200 p-4 rounded-lg" // Custom styles
/>
```

## License

This package is licensed under the MIT License. Feel free to use and modify it in your projects.

---

Enjoy creating amazing animations with `animatio`!

- **Connect on linkedin**: https://www.linkedin.com/in/ahkamboh/
