function plopGenerator(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('components', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'componentType',
        choices: ['context', 'form', 'structure'],
        message: 'What is the component type?',
      },
      {
        type: 'input',
        name: 'contextName',
        message: 'What is the name of the context?',
        when({ componentType }) {
          return componentType === 'context';
        },
      },
    ],
    actions(promptData) {
      const componentTypeIsContext = promptData.componentType === 'context';

      const componentContext = componentTypeIsContext
        ? '/{{kebabCase contextName}}'
        : '';

      const pathToComponentsFolder =
        '../src/common/components/{{kebabCase componentType}}';
      const pathToIntegrationTestFolder =
        '../__tests__/components/{{kebabCase contextName}}';

      const pathToComponentFile = `${pathToComponentsFolder}${componentContext}/{{pascalCase componentName}}/{{pascalCase componentName}}`;

      const pathToComponentTestFile = componentTypeIsContext
        ? `${pathToIntegrationTestFolder}/{{pascalCase componentName}}`
        : pathToComponentFile;

      return [
        {
          type: 'modify',
          path: `${pathToComponentsFolder}/index.ts`,
          pattern: /(\/\/ NEW PLOP COMPONENT EXPORT)/g,
          template: `export { default as {{pascalCase componentName}} } from '.${componentContext}/{{pascalCase componentName}}/{{pascalCase componentName}}';\n$1`,
        },
        {
          type: 'add',
          path: `${pathToComponentFile}.tsx`,
          templateFile: 'templates/components/component.hbs',
        },
        {
          type: 'add',
          path: `${pathToComponentFile}.module.scss`,
          templateFile: 'templates/components/styles.hbs',
        },
        {
          type: 'add',
          path: `${pathToComponentFile}.types.tsx`,
          templateFile: 'templates/components/types.hbs',
        },
        {
          type: 'add',
          path: `${pathToComponentTestFile}.spec.tsx`,
          templateFile: 'templates/components/tests.hbs',
        },
      ];
    },
  });

  plop.setGenerator('pages', {
    description: 'Page generator',
    prompts: [
      {
        type: 'input',
        name: 'pageName',
        message: 'What is the name of the page?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{kebabCase pageName}}.tsx',
        templateFile: 'templates/pages/page.hbs',
      },
      {
        type: 'modify',
        path: '../src/common/modules/index.ts',
        pattern: /(\/\/ NEW PLOP MODULE EXPORT)/g,
        template: `export { default as {{pascalCase pageName}} } from './{{pascalCase pageName}}/{{pascalCase pageName}}';\n$1`,
      },
      {
        type: 'add',
        path: '../src/common/modules/{{pascalCase pageName}}/{{pascalCase pageName}}.tsx',
        templateFile: 'templates/pages/module.hbs',
      },
      {
        type: 'add',
        path: '../src/common/modules/{{pascalCase pageName}}/{{pascalCase pageName}}.module.scss',
        templateFile: 'templates/pages/module-style.hbs',
      },
      {
        type: 'add',
        path: '../src/common/language/pt/{{kebabCase pageName}}.json',
        templateFile: 'templates/pages/language-pt.hbs',
      },
      {
        type: 'add',
        path: '../src/common/language/en/{{kebabCase pageName}}.json',
        templateFile: 'templates/pages/language-en.hbs',
      },
      {
        type: 'add',
        path: '../cypress/e2e/{{kebabCase pageName}}.cy.ts',
        templateFile: 'templates/pages/e2e.hbs',
      },
    ],
  });
}

module.exports = plopGenerator;
