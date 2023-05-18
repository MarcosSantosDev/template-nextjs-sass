declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_APP_KEY: string;
      NEXT_PUBLIC_USER_TOKEN: string;
    }
  }
}

// eslint-disable-next-line prettier/prettier
export {};
