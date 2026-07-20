import dotenv from 'dotenv'

dotenv.config();

export const ENV= {

    baseURL: process.env.BASE_URL!,
    email: process.env.EMAIL!,
    password: process.env.PASSWORD!,
    
    dbHost : process.env.DB_HOST!,
    dbUser : process.env.DB_USER!,
    dbPassword : process.env.DB_PASSWORD!,
    dbName: process.env.DB_NAME!,
    dbPort: process.env.DB_PORT!

}