import { Customer } from '../types/Customer';
import { Database } from './DatabaseClient';

export class CustomerQuery{

static async getCustomerByEmail(email: string){
    
    const db = new Database();
    try {

        const result = await db.executeQuery<Customer>(
                    "SELECT firstname, lastname, email FROM oc_customer WHERE email = ?", [email] );

       return result ;

    }  finally {

      await db.close();

    }

}


}