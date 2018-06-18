import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import * as bcrypt from 'bcrypt';
import { sign } from "jsonwebtoken";

export class RegistrationController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @post('/registration')
  async createUser(@requestBody() user: User) {

    var users = await this.userRepo.find();
    var username = user.username;

    let hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    let userAlreadyExists: boolean = !!(await this.userRepo.count({ email: user.email }));
    if (userAlreadyExists) {
      throw new HttpErrors.BadRequest("this email address already exists");
    }

    let usernameIsTaken: boolean = !!(await this.userRepo.count({ username: user.username }));
    if (usernameIsTaken) {
      throw new HttpErrors.BadRequest("this username already exists");
    }

    let storedUser = await this.userRepo.create(user);
    storedUser.password = "";
    var jwt = sign(
      {
        user: {
          username: user.username,
          password: user.password,
          confirmpassword: user.confirmpassword,
          firstname: user.firstname,
          lastname: user.lastname,
          phonenumber: user.phonenumber, 
          email: user.email
        }
      },
      'shh',
      {
        issuer: 'auth.ix.co.za',
        audience: 'ix.co.za',
      },
    );
    return {
      token: jwt,
    };
  }
  @get('/registration')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }
}

