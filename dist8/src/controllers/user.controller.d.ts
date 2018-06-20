import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    findUser(jwt: string): Promise<Array<User>>;
    findUserById(id: number, jwt: string): Promise<User>;
    getUserInformation(jwt: string): Promise<any>;
}
