import { parse } from "csv-parse/sync";
import fs from 'fs';
import * as XLSX from 'xlsx';

export class DataProvider{

        
    static readCSVFile<T>(filePath:string):T[]{
    
        const fileContent = fs.readFileSync(filePath,"utf-8");

        return parse(fileContent,{columns: true , skip_empty_lines:true}) as T[];

    }

    static readJSONFile<T>(filePath:string): T []{
        
        const fileContent = fs.readFileSync(filePath,'utf-8')
    
        return  JSON.parse(fileContent) as T[] ;
    
        }

        
    static readXLSXFile<T>(filePath:string):T[]{

            const workbook = XLSX.readFile(filePath);
           const sheetName =  workbook.SheetNames[0];
            
           if (!sheetName) {
            throw new Error(`No worksheet found in ${filePath}`);
             }

           const worksheet = workbook.Sheets[sheetName];
           return XLSX.utils.sheet_to_json<T>(worksheet, {
             raw: false,
             defval: '',
                     }) as T[];
             
    
        }
}