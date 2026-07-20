import {faker} from '@faker-js/faker'
import { UserData } from '../types/UserData';

export class FakerDataGeneratorUtil{
   
    static getUserData():UserData{

         return {

           firstName: faker.person.firstName(),
           lastName: faker.person.lastName(),
            email:faker.internet.email(),
            password:faker.internet.password({length: 10})

         }
     }


     static getFirstName(){

        return faker.person.firstName();

     }

     static getLastName(){

        return faker.person.lastName();
     }

     static getEmail(){

        return faker.internet.email();
     }

     static getPassword(){

        return faker.internet.password({length: 10})
     }

}