import { UserRepository } from "../repositories/user.repository";
import { Login } from '../models/login';
import { User } from "../models/user";
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepository);
    login(login: Login): Promise<any>;
    loginWithQuery(login: any): Promise<User>;
}
