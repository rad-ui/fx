# @radui/fx

A UI effects library for modern web applications with optimized imports.

## Installation

```bash
npm install @radui/fx
```

## Import Pattern

This library uses a direct import pattern exclusively. This means you need to import components directly from their paths rather than from the package root.

### Why Direct Imports?

1. **Better Tree-Shaking**: Direct imports enable bundlers to eliminate unused code more effectively, resulting in smaller bundle sizes.
2. **Clear Dependencies**: They make it explicit what's being imported, enhancing code readability.
3. **Improved Build Performance**: Direct imports can lead to faster build times by reducing unnecessary processing.
4. **Type Safety**: TypeScript can more accurately track imports and exports with this pattern.

### Example

```jsx
// ✅ Recommended - direct imports
import Fade from '@radui/fx/Fade';
import Slide from '@radui/fx/Slide';

// ❌ Not supported - importing from the package root
import { Fade, Slide } from '@radui/fx'; // This won't work!
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

### Dazzle

A kinetic headline word: letters drop in one by one, then hop in a wave on every beat while a colour wave and glow run through them, with sparkles and a swoosh underneath. Pure CSS (no animation library at runtime), works with server rendering, and holds still under `prefers-reduced-motion`. Screen readers read the plain text.

```jsx
import Dazzle from "@radui/fx/Dazzle";

<h1>
  Make your marketing <Dazzle>dazzle.</Dazzle>
</h1>

// Your palette, a faster beat, fewer extras
<Dazzle colors={["#34d399", "#22d3ee", "#a3e635", "#fde047"]} beat={1} sparkles={4} swoosh={false}>
  fresh
</Dazzle>
```

| Prop | Default | |
| --- | --- | --- |
| `colors` | blue, violet, pink, amber | Four colours the wave cycles through |
| `beat` | `2` | Seconds between beats |
| `sparkles` | `true` | `false`, or how many (up to 9) |
| `swoosh` | `true` | Gradient underline that draws itself |
| `delay` | `0` | Seconds before the letters drop in |

Looks best on a dark background at display sizes. Uses `@property` and `color-mix()` (all current browsers).

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

### Available Scripts

#### Storybook
```bash
# Run Storybook development server
npm run storybook
# or the shorthand
npm run sb

# Build Storybook for deployment
npm run build-storybook

# Deploy Storybook to GitHub Pages
npm run deploy-storybook
```

#### Development
```bash
# Development with auto-recompile
npm run dev

# Build the library
npm run build

# Clean the build directory
npm run clean
```

#### Testing
```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

#### Linting
```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically when possible
npm run lint:fix
```

## License

MIT 