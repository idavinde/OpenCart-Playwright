export interface LoginData {
    testCase:string;
    email: string;
    password: string;
    expectedMessage?: string;
    isValidUser:boolean;
}