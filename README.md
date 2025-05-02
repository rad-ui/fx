# rad-ui-fx

A UI effects library for modern web applications. This TypeScript library provides a collection of animation and visual effects to enhance your web applications.

## Installation

```bash
npm install rad-ui-fx
```

## Usage

### Basic Example

```typescript
import { hello } from 'rad-ui-fx';

console.log(hello()); // Outputs: Hello from rad-ui-fx!
```

### Animation Utilities

The library provides various animation utilities that you can use with motion libraries:

```tsx
import { motion } from 'framer-motion'; // or from 'motion'
import { createFadeAnimation, createSlideAnimation } from 'rad-ui-fx';

// Create fade animation variants
const fadeVariants = createFadeAnimation({ 
  duration: 0.5,
  initialOpacity: 0,
  finalOpacity: 1,
  easing: 'easeInOut'
});

// Create slide animation variants
const slideVariants = createSlideAnimation({ 
  direction: 'up',
  distance: 50,
  duration: 0.5,
  easing: 'easeOut'
});

function MyComponent() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
      >
        This will fade in
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideVariants}
      >
        This will slide in from below
      </motion.div>
    </div>
  );
}
```

### Pre-built Components

The library also includes ready-to-use animated components:

```tsx
import { FadeInBox, SlideInBox } from 'rad-ui-fx';

function MyApp() {
  return (
    <div>
      <FadeInBox duration={0.8} delay={0.2}>
        This content fades in
      </FadeInBox>
      
      <SlideInBox direction="left" distance={100} duration={0.6}>
        This content slides in from the left
      </SlideInBox>
    </div>
  );
}
```

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