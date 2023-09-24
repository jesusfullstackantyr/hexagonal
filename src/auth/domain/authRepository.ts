import { Auth } from "./auth";

export interface authRepository {
    verifiryUser(credentials:Auth):Promise<Auth | null>;
}