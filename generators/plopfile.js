function plopGenerator(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('components', {
    description: 'Component generator',
    prompts: [],
    actions: [],
  });

  plop.setGenerator('pages', {
    description: 'Page generator',
    prompts: [],
    actions: [],
  });
}

module.exports = plopGenerator;
