import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @get('/user')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get('/user/{id}')
  async findUserById(@param.path.number('id') id: number): Promise<User> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }

}
