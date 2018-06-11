import { repository } from "@loopback/repository";
import { RoleRepository } from "../repositories/role.repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { Role } from "../models/role";

export class RoleController {
  constructor(
    @repository(RoleRepository.name) private roleRepo: RoleRepository
  ) {}

  @get('/role')
  async getAllRoles(): Promise<Array<Role>> {
    return await this.roleRepo.find();
  }
}