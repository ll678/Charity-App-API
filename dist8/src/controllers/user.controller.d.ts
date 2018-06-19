import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    findUser(): Promise<Array<User>>;
    findUserById(id: number, jwt: string): Promise<User>;
    getUserInformation(jwt: string): Promise<any>;
}
