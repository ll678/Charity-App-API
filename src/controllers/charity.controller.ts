import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { post, get, requestBody, HttpErrors, param, patch, put } from "@loopback/rest";
import { Charity } from "../models/charity";
import { sign, verify } from 'jsonwebtoken';

export class CharityController {
  constructor(
    @repository(CharityRepository.name) private charityRepo: CharityRepository
  ) { }

  @post('/charity')
  async createCharity(
    @param.query.string('jwt') jwt: string,
    @requestBody() charity: Charity, ) {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');

    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }
    
    charity.favorited = false;
    //Post charities
    return await this.charityRepo.create(charity);
  }

  @get('/charity')
  async findCharity(@param.query.string('jwt') jwt: string): Promise<Charity[]> {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');

    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Find charities
    return await this.charityRepo.find();
  }

  @get('/charity/{id}')
  async findCharityById(
    @param.query.string('jwt') jwt: string,
    @param.path.number('id') id: number): Promise<Charity> {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');

    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Check for valid ID
    let charityExists: boolean = !!(await this.charityRepo.count({ id }));
    if (!charityExists) {
      throw new HttpErrors.BadRequest(`Unfortunately charity ID ${id} does not exist in our system.`);
    }
    //Find charity by ID
    return await this.charityRepo.findById(id);
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

  @patch('/mycharity/{id}')
  async addMyCharity(@param.path.number('id') id: number) {
    let charity = await this.charityRepo.findById(id);
    charity.favorited = true;
    this.charityRepo.update(charity);
  }

  @patch('/notmycharity/{id}')
  async removeMyCharity(@param.path.number('id') id: number) {
    let charity = await this.charityRepo.findById(id);
    charity.favorited = false;
    this.charityRepo.update(charity);
  }

  @get('/mycharity')
  async findMyCharities(): Promise<Array<Charity>> {
    var charities = await this.charityRepo.find();
    var mycharities = [];
    var i;
    for (i = 0; i < charities.length; i++) {
      if (charities[i].favorited == true) {
        mycharities.push(charities[i]);
      } 
    }
    return await mycharities;
  }


}