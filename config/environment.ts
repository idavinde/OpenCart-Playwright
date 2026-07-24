import dotenv from 'dotenv';

dotenv.config();

function requireEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const ENV = {
  baseURL: requireEnvironmentVariable('BASE_URL'),
  existUserEmail: requireEnvironmentVariable('EMAIL'),
  existUserPassword: requireEnvironmentVariable('PASSWORD'),

  dbHost: requireEnvironmentVariable('DB_HOST'),
  dbUser: requireEnvironmentVariable('DB_USER'),
  dbPassword: process.env.DB_PASSWORD ?? '',
  dbName: requireEnvironmentVariable('DB_NAME'),
  dbPort: requireEnvironmentVariable('DB_PORT'),
} as const;