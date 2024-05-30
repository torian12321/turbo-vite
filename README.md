# `Turborepo` Vite starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e with-vite
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- Apps

  - `docs`: a vanilla [vite](https://vitejs.dev) ts app
  - `web`: another vanilla [vite](https://vitejs.dev) ts app

- Packages

  - `@propylon/ui`: a stub component & utility library shared by both `web` and `docs` applications
  - `@propylon/config-prettier`: shared `prettier` configurations
  - `@propylon/config-typescript`: `tsconfig.json`s used throughout the monorepo
  - `@propylon/eslint-config`: shared `eslint` configurations

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
