import { UserRepository } from "../repositories/user.repository";
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepository);
    login(login: any): Promise<any>;
}
