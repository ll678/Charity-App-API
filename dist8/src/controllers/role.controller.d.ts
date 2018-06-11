import { RoleRepository } from "../repositories/role.repository";
import { Role } from "../models/role";
export declare class RoleController {
    private roleRepo;
    constructor(roleRepo: RoleRepository);
    findRole(): Promise<Role[]>;
}
