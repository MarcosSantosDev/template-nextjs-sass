declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_NODE_ENV: string;
    }
  }
}

// eslint-disable-next-line prettier/prettier
export {};
