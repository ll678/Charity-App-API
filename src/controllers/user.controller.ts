import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { get, HttpErrors, param, put, requestBody, patch } from "@loopback/rest";
import { User } from "../models/user";
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';


export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get('/user')
  async findUser(@param.query.string('jwt') jwt: string): Promise<Array<User>> {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');
    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Find users
    return await this.userRepo.find();
  }

  @get('/user/{id}')
  async findUserById(
    @param.path.number('id') id: number,
    @param.query.string('jwt') jwt: string): Promise<User> {

    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');
    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));
    if (!userExists) {
      throw new HttpErrors.BadRequest(`Unfortunately user ID ${id} does not exist in our system.`);
    }
    //Find user by ID
    return await this.userRepo.findById(id);
  }

  //Passing user information EXAMPLE
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

  @put('/user/settings') 
  async updateProfile(@requestBody() body: any): Promise<any> {
    var update = body.user as User;
    var user = await this.userRepo.findById(update.id)
    let check = await bcrypt.compare(body.user.password, user.password)
    console.log(check);
    if (check) {
      user.firstname = update.firstname;
      user.lastname = update.lastname;
      user.email = update.email;
      user.username = update.username;
      user.phonenumber = update.phonenumber;
      user.id = update.id;
      if (body.newpassword.length > 0) {
        let newestpassword = await bcrypt.hash(body.newpassword,10);
        user.password = newestpassword;
      } else {
        body.newpassword = user.password;
      }
      await this.userRepo.save(user);
      console.log("info updated");
      var jwt = sign(
        {
          user: {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            username: user.username,
            phonenumber: user.phonenumber,
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
        token: jwt
      };
    }
    else {
      throw new HttpErrors.Unauthorized("password is invalid");
    }
  }
}
