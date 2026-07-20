import mysql, {RowDataPacket} from 'mysql2/promise';
import { ENV } from '../config/environment';

export class Database{

    private connection;

    constructor(){

        this.connection = mysql.createPool({
            host: ENV.dbHost, 
            user: ENV.dbUser,
            password: ENV.dbPassword,
            database: ENV.dbName,
            port: Number (ENV.dbPort)   
        });

    }

    async executeQuery<T extends RowDataPacket >(query:string, value:any[]=[]) : Promise<T[]>{

        const[result] = await this.connection.execute<T[]>(query, value);
        return result;


    }

}