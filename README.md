# Animatio Text

A React component package for creating animated and sequential text effects using `anime.js`. Customize your text animation effortlessly with customizable classNames for styling.

## Installation

To install the package, run the following command in your Next.js or React project:

```bash
npm install animatio-text@latest
```

## Components

### 1. SequentialText

The `SequentialText` component animates words sequentially, where each letter is animated as it appears on the screen.

#### Usage

```tsx
import { SequentialText } from 'animatio-text';

const ExampleComponent = () => {
  return (
    <SequentialText
      text={['Hello', 'World', 'Welcome to Animatio!']}
      speed={0.8} // Optional: Controls animation speed (default is 0.8)
      className="text-blue-500 text-4xl bg-yellow-200 p-2" // Optional: Apply custom styles
    />
  );
};
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

```tsx
import { AnimatedText } from 'animatio-text';

const ExampleComponent = () => {
  return (
    <AnimatedText
      text={['React', 'Animation', 'Made Simple']}
      speed={0.6} // Optional: Controls animation speed (default is 0.6)
      className="text-red-500 text-3xl" // Optional: Apply custom styles
    />
  );
};
```

#### Props

- `text` (required): An array of strings representing the words to animate.
- `speed` (optional): A number controlling the animation speed (default: `1`).
- `className` (optional): Custom CSS classes to style the animated text.

#### Default Speed

- The default speed for the `AnimatedText` component is `1`.

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

Enjoy creating amazing animations with `animatio-text`!


### Summary of Changes:
- **Installation**: Includes `npm install animatio-text@latest` for easy installation.
- **Usage Examples**: Provides examples for both `SequentialText` and `AnimatedText`, showing how to pass text, speed, and custom classes.
- **Props Documentation**: Clearly lists the props, including default values for `speed`.
- **Customization**: Explains how to customize text styles using `className`.
- **Connect on linkedin**: https://www.linkedin.com/in/ahkamboh/
