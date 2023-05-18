import packageJson from '../../../package.json';

export const version = packageJson.version;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const APP_KEY = process.env.NEXT_PUBLIC_APP_KEY;
export const USER_TOKEN = process.env.NEXT_PUBLIC_USER_TOKEN;
