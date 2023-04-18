<div align="center">
    <img src="./public/next.svg" width="200" alt="Logo Nexjs">
</div>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 💻 Prerequisites

### Before you begin, make sure you've met the following requirements:

- node(versions 14.x.x or later)
- npm(versions 5.x.x or later)

## 🔨 Tools

**Linter tools setup**

- [commitlint](https://commitlint.js.org/)
- [commitizen](https://commitizen-tools.github.io/commitizen/)
- [stylelint](https://stylelint.io/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

**Git hooks(pre-commit, commit-msg)**

- [husky](https://typicode.github.io/husky/)
- [lint-staged(Run linters on git staged files)](https://github.com/okonet/lint-staged)

**Enviroment to tests**

- [cypress(E2E)](https://www.cypress.io/)
- [jest(unit/integration tests)](https://jestjs.io/pt-BR/)

**Internacionalization**

- [next-i18next (PT, EN)](https://next.i18next.com/)

**Modules style**

- [sass](https://sass-lang.com/)

**Generators**

- [plopjs](https://plopjs.com)

## 🚀 Initial steps

Clone the project:

```
git clone https://github.com/MarcosSantosDev/nextjs-playground.git
```

Install the dependencies:

```
npm install
```

## ☕ Application commands

### How to run app in development mode and production ready mode ?

To run the application in development mode, run the command below:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To generate the application build, run the command below:

```
npm run build
```

To run the application on top of the build, in production mode, run the command below:

```
npm run start
```

### How to run integration and unit tests ?

To run the integration and unit tests, run the following command in your terminal:

```
npm run test
```

To `run` and `watch` the integration and unit tests, run the following command in your terminal:

```
npm run test:watch
```

### How to run E2E tests ?

To run your end-to-end tests and view the results in the terminal, run the following command in your terminal:

```
npm run ci:e2e:headless
```

To open and run your end-to-end tests in the cypress playground, run the following command in your terminal:

```
npm run ci:e2e
```

## 🤝 Contributing to the project

### To contribute, follow these steps:

1. Clone this repository.
2. Create a branch:`git checkout -b <type>/<branch_name>`
3. Make your changes and confirm them:

- Common commit message: `git commit -m "<type>: message"`
- To commit with commitizen(commit message formatter): `npm run commit`

4. Push to original branch: `git push`
5. Create the pull request to `development` branch.

## :warning: Standards adopted in the project

- [Git](./docs/git.md)
- [Sass](./docs/sass.md)
