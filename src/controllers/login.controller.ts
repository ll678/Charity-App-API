import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { sign, verify } from 'jsonwebtoken';

export class LoginController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @post('/login')
  async login(@requestBody() login: any): Promise<any> {
    var users = await this.userRepo.find();

    var email = login.email;
    var password = login.password;

    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.email == email && user.password == password) {
        var jwt = sign(
          {
            user: {
              id: user.id,
              firstname: user.firstname,
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

    throw new HttpErrors.NotFound('User not found, sorry!');
  }

  @post('/login-with-query')
  async loginWithQuery(@requestBody() login: any): Promise<User> {
    var users = await this.userRepo.find({
      where: {
        and: [{email: login.email}, {password: login.password}],
      },
    });

    if (users.length == 0) {
      throw new HttpErrors.NotFound('User not found, sorry!');
    }

    return users[0];
  }
}
