export interface AuthRepository  {
    login(email:string,password:string):Promise<any | null>;
    logout():Promise<any>;
}