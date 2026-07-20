import { RowDataPacket } from 'mysql2/promise';

export interface Customer extends RowDataPacket {
    firstname: string;
    lastname: string;
    email: string;
    telephone: string;
}