import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { Login } from '../models/login'
import { User } from "../models/user";
import { sign, verify } from 'jsonwebtoken';

export class LoginController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @post('/login')
  async login(@requestBody() login: Login): Promise<any> {

    var users = await this.userRepo.find();
    var username = login.username;
    var password = login.password;

    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.username == username && user.password == password) {
        var jwt = sign(
          {
            user: {
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email
            },
            anything: "hello"
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
    }

    throw new HttpErrors.Unauthorized('Your username or password might be incorrect. Please try again.');
  }

  @post('/loginWithQuery')
  async loginWithQuery(@requestBody() login: any): Promise<User> {
    var users = await this.userRepo.find({
      where: {
        and: [{username: login.username}, {password: login.password}],
      },
    });

    if (users.length == 0) {
      throw new HttpErrors.Unauthorized('Sorry but it seems we could not find your user.');
    }

    return users[0];
  }
}
