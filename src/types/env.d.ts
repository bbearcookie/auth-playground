declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    MONGO_LOCAL_URI: string;
    DATABASE_NAME: string;
  }
}
