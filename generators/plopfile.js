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
    actions: data => {
      const componentTypeIsContext = data.componentType === 'context';

      const componentWithContext = componentTypeIsContext
        ? '/{{kebabCase contextName}}'
        : '';

      const componentMainPath = `../src/common/components/{{componentType}}`;

      const componentPath = `${componentMainPath}${componentWithContext}/{{pascalCase componentName}}/{{pascalCase componentName}}`;

      return [
        {
          type: 'modify',
          path: `${componentMainPath}/index.ts`,
          pattern: /(\/\/ NEW PLOP COMPONENT EXPORT)/g,
          template: `export { default as {{pascalCase componentName}} } from '.${componentWithContext}/{{pascalCase componentName}}/{{pascalCase componentName}}';\n$1`,
        },
        {
          type: 'add',
          path: `${componentPath}.tsx`,
          templateFile: 'templates/components/component.hbs',
        },
        {
          type: 'add',
          path: `${componentPath}.module.scss`,
          templateFile: 'templates/components/styles.hbs',
        },
        {
          type: 'add',
          path: `${componentPath}.types.tsx`,
          templateFile: 'templates/components/types.hbs',
        },
        {
          type: 'add',
          path: `${componentPath}.spec.tsx`,
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
