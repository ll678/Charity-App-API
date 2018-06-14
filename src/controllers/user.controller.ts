import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { get, HttpErrors, param } from "@loopback/rest";
import { User } from "../models/user";
import {sign, verify} from 'jsonwebtoken';

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @get('/user')
  async findUser(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get('/user/{id}')
  async findUserById(@param.path.number('id') id: number): Promise<User> {

    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));
    if (!userExists) {
      throw new HttpErrors.BadRequest(`Unfortunately user ID ${id} does not exist in our system.`);
    }

    return await this.userRepo.findById(id);
  }

  //Passing user information
  @get('/me')
  async getUserInformation(@param.query.string('jwt') jwt: string): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');

    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
      return jwtBody.user;
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }
  }

}
