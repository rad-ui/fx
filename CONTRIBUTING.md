# Contributing to @radui/fx

Thank you for your interest in contributing to @radui/fx! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project. We aim to foster an inclusive and welcoming community.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork to your local machine
3. Install dependencies with `npm install`
4. Run development server with `npm run dev`

## Development Workflow

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and ensure they follow our code style guidelines
3. Write tests for your changes if applicable
4. Run tests to ensure they pass:
   ```bash
   npm test
   ```

5. Run linting to ensure code quality:
   ```bash
   npm run lint
   ```

6. Commit your changes following [conventional commits](https://www.conventionalcommits.org/) standard:
   ```bash
   git commit -m "feat: add new animation effect"
   ```

7. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

8. Open a pull request against the main repository

## Pull Request Process

1. Ensure all tests pass and linting issues are resolved
2. Update documentation if necessary
3. Add a clear description of the changes and their purpose
4. Reference any relevant issues in your PR description
5. Wait for a maintainer to review your PR
6. Address any feedback from the review

## Creating Components

When creating new components, follow these guidelines:

1. Each component should be in its own directory under `src/fx/`
2. Include an `index.ts` file that exports the component
3. Write comprehensive tests for the component
4. Create a Storybook story to showcase the component
5. Include proper TypeScript typings
6. Follow the project's naming conventions

## Code Style Guidelines

- Follow the ESLint and Prettier configurations in the project
- Write meaningful comments for complex logic
- Use TypeScript's type system effectively
- Keep components focused and single-purpose
- Follow React best practices

## Documentation

Please document your code thoroughly:

- Add JSDoc comments to functions and components
- Update the README if your changes affect usage
- Include examples in Storybook stories

## Testing

We use Vitest for testing. Make sure your code is well-tested:

- Write unit tests for utility functions
- Write component tests for React components
- Aim for good test coverage
- Run `npm test` to ensure your tests pass

## Releasing

Only maintainers can release new versions of the library. The release process is:

1. Update version in package.json
2. Update CHANGELOG.md
3. Create a git tag
4. Run `npm publish`

## Questions?

If you have any questions or need help, please open an issue on GitHub. 