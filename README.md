# Animatio

A React component package for creating dynamic text effects. Effortlessly customize your text animations with configurable classNames for styling and control.

## Installation

To install the package in your Next.js or React project, follow these steps:

### 1. Install the package

```bash
npm i animatio@latest
```

### 2. Initialize the package

```bash
npx animatio init
```

### 3. Add an animation

```bash
npx animatio add <animation name>
# Example
npx animatio add CaptureText
```

## Components

### 1. **CaptureText**

Animates each letter as it appears on the screen with a pop effect.

#### Usage

```bash
npx animatio add CaptureText
```

#### Example

```tsx
import CaptureText from "@/components/animatios/CaptureText";

<CaptureText
  text={['Hello', 'World']}
  speed={0.7}
  className="text-blue-500"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `0.7`).
  - `className` (optional): Custom CSS class names.

###  Using Cdn
    
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Capture Text Animation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body>

    <h1 class="CaptureText"></h1>

    <script src="https://cdn.jsdelivr.net/gh/ahkamboh/animatio@main/cdns%40latest/capturetext.js"></script>
    <script>
       const animatio = new CaptureText(["Capture", "Animation"], 0.7);
    </script>
  </body>
</html>
```

### 2. **DanceDualText**

Creates a dance-like animation where letters move in from different directions.

#### Usage

```bash
npx animatio add DanceDualText
```

#### Example

```tsx
import DanceDualText from "@/components/animatios/DanceDualText";

<DanceDualText
  text={['Animating', 'Text']}
  speed={0.7}
  direction="top"
  className="text-red-400"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `0.7`).
  - `direction` (optional): Choose between `'top'` or `'bottom'`.

###  Using Cdn
    
```html
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DanceDual Text Animation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body>

    <h1 class="DanceDualText"></h1>

    <script src="https://cdn.jsdelivr.net/gh/ahkamboh/animatio@main/cdns%40latest/dancedualtext.js"></script>
    <script>
      const animatio = new DanceDualText(["Dance Dual", "Animation"], 0.7, "top");
    </script>
  </body>
</html>

```

### 3. **DanceText**

A dance-like animation where letters come in from the top or bottom.

#### Usage

```bash
npx animatio add DanceText
```

#### Example

```tsx
import DanceText from "@/components/animatios/DanceText";

<DanceText
  text={['Creative', 'Animations']}
  speed={0.5}
  direction="bottom"
  className="text-green-500"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `0.5`).
  - `direction` (optional): `'top'` or `'bottom'`.

###  Using Cdn
    
```html
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dance Text Animation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body>

    <h1 class="DanceText"></h1>

    <script src="https://cdn.jsdelivr.net/gh/ahkamboh/animatio@main/cdns%40latest/dancetext.js"></script>
    <script>
      const animatio = new DanceText(["Dance Text", "Animation"], 0.5, "bottom")
    </script>
  </body>
</html>

```

### 4. **FlowingText**

Creates a smooth flow-in animation for each letter.

#### Usage

```bash
npx animatio add FlowingText
```

#### Example

```tsx
import FlowingText from "@/components/animatios/FlowingText";

<FlowingText
  text={['Smooth', 'Flow']}
  speed={0.7}
  className="text-purple-600"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `0.7`).
  - `className` (optional): Custom styles.

###  Using Cdn
    
```html
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flowing Text Animation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body>

    <h1 class="FlowingText"></h1>

    <script src="https://cdn.jsdelivr.net/gh/ahkamboh/animatio@main/cdns%40latest/flowingtext.js"></script>
    <script>
       const animatio = new FlowingText(["Flowing Text", "Animation"], 0.8);
    </script>
  </body>
</html>

```

### 5. **GlideText**

Letters glide in from the selected direction: top, bottom, left, right, vertical, or horizontal.

#### Usage

```bash
npx animatio add GlideText
```

#### Example

```tsx
import GlideText from "@/components/animatios/GlideText";

<GlideText
  text={['Gliding', 'Effect']}
  speed={1}
  direction="right"
  className="text-blue-800"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `1`).
  - `direction` (optional): `'top'`, `'bottom'`, `'left'`, `'right'`, `'horizontal'`, `'vertical'`.

###  Using Cdn
  
```html
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Glide Text Animation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;

      }
    </style>
  </head>
  <body>

    <h1  class="GlideText"></h1>

    <script src="https://cdn.jsdelivr.net/gh/ahkamboh/animatio@main/cdns%40latest/glide_text.js"></script>
    <script>
      const animatio = new GlideText(["Glide", "Animation"], 1, "top");
    </script>
  </body>
</html>

```

### 6. **LetterPopText**

Each letter pops in with scaling and fading effects.

#### Usage

```bash
npx animatio add LetterPopText
```

#### Example

```tsx
import LetterPopText from "@/components/animatios/LetterPopText";

<LetterPopText
  text={['Pop', 'Effect']}
  speed={1}
  className="text-yellow-500"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `1`).
  - `className` (optional): Custom CSS class names.

###  Using Cdn
  
```html
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Letter Pop Text Animation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;

      }
    </style>
  </head>
  <body>

    <h1  class="LetterPopText"></h1>

    <script src="https://cdn.jsdelivr.net/gh/ahkamboh/animatio@main/cdns%40latest/letterpoptext.js"></script>
    <script>
       const animatio = new LetterPopText(["Letter Pop", "Animation"], 0.8);
    </script>
  </body>
</html>

```

### 7. **SurgeText**

Creates a surge effect where letters rotate in and move from different angles.

#### Usage

```bash
npx animatio add SurgeText
```

#### Example

```tsx
import SurgeText from "@/components/animatios/SurgeText";

<SurgeText
  text={['Surge', 'In']}
  speed={0.8}
  className="text-indigo-600"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `0.8`).
  - `className` (optional): Custom CSS styles.

###  Using Cdn
  
```html
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Surge Text Animation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;

      }
    </style>
  </head>
  <body>

     <h1  class="SurgeText"></h1>

    <script src="https://cdn.jsdelivr.net/gh/ahkamboh/animatio@main/cdns%40latest/surgetext.js"></script>
    <script>
    const animatio = new SurgeText(["Surge", "Animation"], 0.8)
    </script>
  </body>
</html>

```

### 8. **SwapText**

A text swapping effect where letters animate by sliding in.

#### Usage

```bash
npx animatio add SwapText
```

#### Example

```tsx
import SwapText from "@/components/animatios/SwapText";

<SwapText
  text={['Swap', 'Text']}
  speed={1}
  className="text-pink-600"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `1`).
  - `className` (optional): Custom CSS classes.

###  Using Cdn
  
```html
  
```

### 9. **SwingText**

Creates a swinging animation for each letter.

#### Usage

```bash
npx animatio add SwingText
```

#### Example

```tsx
import SwingText from "@/components/animatios/SwingText";

<SwingText
  text={['Swing', 'Text']}
  speed={1}
  className="text-teal-400"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `1`).
  - `className` (optional): Custom styles.

### 10. **TwinkleText**

Letters twinkle in with a rotating or sliding effect.

#### Usage

```bash
npx animatio add TwinkleText
```

#### Example

```tsx
import TwinkleText from "@/components/animatios/TwinkleText";

<TwinkleText
  text={['Twinkle', 'Effect']}
  speed={0.4}
  direction="left"
  className="text-orange-500"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `0.4`).
  - `direction` (optional): `'left'` or `'right'`.
  - `className` (optional): Custom styles.

### 11. **WordPopText**

Pops in each word with a scaling effect.

#### Usage

```bash
npx animatio add WordPopText
```

#### Example

```tsx
import WordPopText from "@/components/animatios/WordPopText";

<WordPopText
  text={['Popping', 'Words']}
  speed={1}
  className="text-gray-600"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `1`).
  - `className` (optional): Custom styles.

### 12. **SlitText**

SlitText in each word .

#### Usage

```bash
npx animatio add SlitText
```

#### Example

```tsx
import SlitText from "@/components/animatios/SlitText";

<SlitText
  text={['Slit', 'Words']}
  speed={0.7}
  className="text-gray-600"
/>
```

- **Props**:
  - `text` (required): Array of strings.
  - `speed` (optional): Animation speed (default: `0.7`).
  - `className` (optional): Custom styles.

## Customization

Each component accepts the `className` prop to allow for custom styling. This makes it easy to integrate Animatio into any design system.

## License

This package is licensed under the MIT License. Feel free to use and modify it in your projects.

---

Enjoy creating stunning animations with **Animatio**! 

- **Connect on LinkedIn**: https://www.linkedin.com/in/ahkamboh/