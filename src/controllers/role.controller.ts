import { repository } from "@loopback/repository";
import { RoleRepository } from "../repositories/role.repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { Role } from "../models/role";

export class RoleController {
  constructor(
    @repository(RoleRepository.name) private roleRepo: RoleRepository
  ) {}

  @post('/role')
  async createRole(@requestBody() role: Role) {
    return await this.roleRepo.create(role);
  }

  @get('/role')
  async findRole(): Promise<Role[]> {
    return await this.roleRepo.find();
  }
}