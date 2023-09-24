import { Auth } from "../domain/auth";
import { authRepository } from "../domain/authRepository";

export class MysqlOrmRepository implements authRepository {
    verifiryUser(credentials: Auth): Promise<Auth | null> {
        throw new Error("Method not implemented.");
    }
    logout(): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    
}