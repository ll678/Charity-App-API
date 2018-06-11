import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepository);
    login(login: any): Promise<any>;
    loginWithQuery(login: any): Promise<User>;
}
