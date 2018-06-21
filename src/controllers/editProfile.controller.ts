import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { get, HttpErrors, param, put, requestBody, patch } from "@loopback/rest";
import { User } from "../models/user";
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';


export class EditProfileController {
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @put('/user/editProfile')
    async updateProfile(@requestBody() body: any): Promise<any> {
        var update = body.user as User;
        var user = await this.userRepo.findById(update.id)


        user.username = update.username;
        user.firstname = update.firstname;
        user.lastname = update.lastname;
        user.email = update.email;
        user.phonenumber = update.phonenumber;
        user.id = update.id;
        
        await this.userRepo.save(user);
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
}
