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
    prompts: [],
    actions: [],
  });
}

module.exports = plopGenerator;
