import { AuthRepository } from "../domain/authRepository";

export class AuthMysqlRepository implements AuthRepository  {
    login(email: string, password: string): Promise<any> {
       // implementar logica para login
    }
    logout(): Promise<any> {
        //IMPLEMENTAR LOGICA DE LOGOUT
    }
}