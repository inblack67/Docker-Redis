declare namespace NodeJS {
  export interface ProcessEnv {
    REDIS_PASSWORD: string;
    REDIS_PORT: string;
    REDIS_HOST: string;
  }
}
