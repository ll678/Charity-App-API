import { repository } from "@loopback/repository";
import { RoleRepository } from "../repositories/role.repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { Role } from "../models/role";
import { sign, verify } from 'jsonwebtoken';

export class RoleController {
  constructor(
    @repository(RoleRepository.name) private roleRepo: RoleRepository
  ) { }

  @post('/role')
  async createRole(
    @param.query.string('jwt') jwt: string,
    @requestBody() role: Role, ) {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');
    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Post roles
    return await this.roleRepo.create(role);
  }

  @get('/role')
  async findRole(@param.query.string('jwt') jwt: string): Promise<Role[]> {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');
    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Find roles
    return await this.roleRepo.find();
  }
}