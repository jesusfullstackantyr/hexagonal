import { Auth } from "../../domain/auth";
import { authRepository } from "../../domain/authRepository";
import { generateToken } from "../jwt/auth";

export class AuthUseCase {
    
    constructor(readonly repository:authRepository) {}

    async run(email:string,password:string):Promise<any|null> {

        try {
            
            let credentials = new Auth(email,password);

            // let user = await this.repository.verifiryUser(credentials);
            let user = true;
            if (!user) {
                //IMPLEMENTS
                throw new Error("Credeciales invalidas");
            }

            let token = await generateToken(user);
            
            return {
                user,
                token
            };

        }catch(error) {
            //IMPLEMENTS
            return null;
        }

    }

}