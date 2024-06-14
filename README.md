#### Example for active address of zkLink-X

## Install

1. Install [node.js](https://nodejs.org/en/download/), [yarn](https://yarnpkg.com/getting-started/install) (or use npm).
2. Clone this repository, and using a terminal navigate to its directory.
3. Run `yarn` or `npm install` to install the dependencies.

## Build & Run

1. Copy the contents of the `.env.example` file to a `.env` next to it, and edit it with your values.
2. Run `yarn start` or `npm start` to start the application.

## Developing

### Visual Studio Code

-   Installing the Eslint (`dbaeumer.vscode-eslint`) and Prettier - Code formatter (`esbenp.prettier-vscode`) extensions is recommended.

## Linting & Formatting

-   Run `yarn lint` or `npm lint` to lint the code.
-   Run `yarn format` or `npm format` to format the code.

## Testing

Check the placeholder test examples to get started : 

- `/src/app.ts` that provide a function `sum` 
- `/test/app.spec.ts` who test the `sum` function 

This files are just an example, feel free to remove it

-   Run `yarn test` or `npm test` to execute all tests.
-   Run `yarn test:watch` or `npm test:watch` to run tests in watch (loop) mode.
-   Run `yarn test:coverage` or `npm test:coverage` to see the tests coverage report.
