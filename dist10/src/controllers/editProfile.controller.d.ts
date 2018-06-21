import { UserRepository } from "../repositories/user.repository";
export declare class EditProfileController {
    private userRepo;
    constructor(userRepo: UserRepository);
    updateProfile(body: any): Promise<any>;
}
