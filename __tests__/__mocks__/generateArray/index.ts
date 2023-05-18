import { faker } from '@faker-js/faker';

function generateArray() {
  return faker.random
    .word()
    .split('')
    .map(() => ({
      id: faker.string.uuid(),
      name: faker.lorem.word(),
    }));
}

export default generateArray;
