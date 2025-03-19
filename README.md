# Next.js Project Setup

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm

## Getting Started

### 1. Install Dependencies

Using Yarn:

```sh
yarn install
```

Or using npm:

```sh
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for required variables.

### 3. Edit Constants

Modify `/src/constants/index.ts` to update project-specific settings.

### 4. Run the Development Server

Using Yarn:

```sh
yarn dev
```

Or using npm:

```sh
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Build and Deploy

To build the project for production:

```sh
yarn build
```

Or using npm:

```sh
npm run build
```

Then start the production server:

```sh
yarn start
```

Or using npm:

```sh
npm run start
```

## Additional Scripts

- **Linting:** `yarn lint` or `npm run lint`
- **Formatting:** `yarn format` or `npm run format`
- **Type Checking:** `yarn type-check` or `npm run type-check`

## Notes

- Ensure you update `/src/constants/index.ts` for project-specific configurations.
- Use `.env.local` for storing API keys and environment-specific variables.
- Follow the coding standards and linting rules for consistency.

Happy coding! 🚀
