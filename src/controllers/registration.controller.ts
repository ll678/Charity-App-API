import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import * as bcrypt from 'bcrypt';

export class RegistrationController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @post('/registration')
  async verifyAndCreateUser(@requestBody() user: User): Promise<any> {

      let hashedPassword = await bcrypt.hash(user.password, 10);

      var userToStore = new User();
      userToStore.id = user.id;
      userToStore.username = user.username;
      userToStore.firstname = user.firstname;
      userToStore.lastname = user.lastname;
      userToStore.email = user.email;
      userToStore.phonenumber = user.phonenumber;
      userToStore.password = hashedPassword;

      let storedUser =  await this.userRepo.create(userToStore);
      storedUser.password = "";
      return storedUser;
  
  }

}
