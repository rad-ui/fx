# @radui/fx

A UI effects library for modern web applications with optimized imports.

## Installation

```bash
npm install @radui/fx
```

## Usage

### Direct imports (only supported method)

The library is designed to be imported using direct component imports for better tree-shaking and bundle optimization:

```jsx
import Fade from "@radui/fx/Fade";
import Slide from "@radui/fx/Slide";

// Or utilities
import { createFadeAnimation } from "@radui/fx/Fade";
import { createSlideAnimation } from "@radui/fx/Slide";

function MyComponent() {
  return (
    <div>
      <Fade duration={0.5} delay={0.2}>
        This content fades in
      </Fade>
      
      <Slide direction="left" distance={100} duration={0.6}>
        This content slides in from the left
      </Slide>
    </div>
  );
}
```

### Motion Adapter Utilities

Access motion adapter utilities:

```jsx
import { createTransition } from "@radui/fx/utils/motion-adapter";
```

### Version Information

Get version information:

```jsx
import { version, getLibraryInfo } from "@radui/fx/version";

console.log(`Using @radui/fx version: ${version}`);
```

### Using animation utilities directly

```jsx
import { motion } from 'framer-motion'; // or from 'motion'
import { createFadeAnimation } from '@radui/fx/Fade';

function MyComponent() {
  const fadeVariants = createFadeAnimation({ duration: 0.8 });
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
    >
      Fade me in!
    </motion.div>
  );
}
```

## Available Components and Utilities

### Fade

```jsx
import Fade, { createFadeAnimation } from "@radui/fx/Fade";
```

#### Properties

- `duration`: Duration of the animation in seconds (default: 0.5)
- `delay`: Delay before the animation starts in seconds (default: 0)
- `initialOpacity`: Initial opacity value (default: 0)
- `finalOpacity`: Final opacity value (default: 1)
- `easing`: Easing function to use (default: "easeInOut")

### Slide

```jsx
import Slide, { createSlideAnimation } from "@radui/fx/Slide";
```

#### Properties

- `direction`: Direction from which to slide ("up", "down", "left", "right") (default: "up")
- `distance`: Distance to slide in pixels (default: 50)
- `duration`: Duration of the animation in seconds (default: 0.5)
- `delay`: Delay before the animation starts in seconds (default: 0)
- `easing`: Easing function to use (default: "easeInOut")

## Documentation and Demo

The library includes a Storybook setup to demonstrate the animations and components:

```bash
# Run Storybook locally
npm run storybook
```

This will start Storybook on http://localhost:6006 where you can:
- View all available animations
- Experiment with different parameters
- See usage examples
- Test components in isolation

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/rad-ui-fx.git
cd rad-ui-fx

# Install dependencies
npm install
```

### Build

```bash
npm run build
```

### Run Storybook

```bash
npm run storybook
```

### Test

```bash
npm test
```

## License

MIT 