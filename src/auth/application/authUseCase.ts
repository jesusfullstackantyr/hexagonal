import { AuthRepository } from "../domain/authRepository";

export class AuthUseCase {

    constructor(readonly authRepository:AuthRepository){}

    async run(email:string,password:string) {
        try {
            return this.authRepository.login(email,password);
        }catch(error){
            return null;
        }
    }

}