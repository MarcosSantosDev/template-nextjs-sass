import packageJson from '../../../package.json';

export const version = packageJson.version;

export const uri: { [key: string]: string } = {
  development: '',
  production: '',
  test: '',
};

export const NODE_ENV = process.env.NODE_ENV;
