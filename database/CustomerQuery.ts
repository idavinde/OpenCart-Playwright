import { Customer } from '../types/Customer';
import { Database } from './database';

export class CustomerQuery{

static async getCustomerByEmail(email: string){
    try {
    
        const db = new Database();

        const result = await db.executeQuery<Customer>(
            "SELECT firstname, lastname, email FROM oc_customer WHERE email = ?"
       , [email] );

       return result ;

    } catch(error) {
        
         throw error;  
    }

}



}