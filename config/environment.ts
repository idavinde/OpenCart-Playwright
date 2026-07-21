import dotenv from 'dotenv';

dotenv.config();

function requireEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value?.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const ENV = {
  baseURL: requireEnvironmentVariable('BASE_URL'),
  email: requireEnvironmentVariable('EMAIL'),
  password: requireEnvironmentVariable('PASSWORD'),

  dbHost: requireEnvironmentVariable('DB_HOST'),
  dbUser: requireEnvironmentVariable('DB_USER'),
  dbPassword: requireEnvironmentVariable('DB_PASSWORD'),
  dbName: requireEnvironmentVariable('DB_NAME'),
  dbPort: requireEnvironmentVariable('DB_PORT'),
} as const;