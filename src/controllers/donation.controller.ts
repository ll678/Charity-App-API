import { repository } from "@loopback/repository";
import { DonationRepository } from "../repositories/donation.repository";
import { post, get, requestBody, param, HttpErrors } from "@loopback/rest";
import { Donation } from "../models/donation";
import { sign, verify } from 'jsonwebtoken';

export class DonationController {
  constructor(
    @repository(DonationRepository.name) private donationRepo: DonationRepository
  ) { }

  @post('/donation')
  async createDonation(
    @param.query.string('jwt') jwt: string,
    @requestBody() donation: Donation ) {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');

    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Post donations
    return await this.donationRepo.create(donation);
  }

  @get('/donation')
  async findDonation(@param.query.string('jwt') jwt: string): Promise<Donation[]> {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');

    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Get donations
    return await this.donationRepo.find();
  }

  @get('/donation/{id}')
  async findCharityById(
    @param.query.string('jwt') jwt: string,
    @param.path.number('id') id: number): Promise<Donation> {
    //Make endpoints secure
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');

    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

    //Check for valid ID
    let donationExists: boolean = !!(await this.donationRepo.count({ id }));
    if (!donationExists) {
      throw new HttpErrors.BadRequest(`Unfortunately donation ID ${id} does not exist in our system.`);
    }
    //Find donation by ID
    return await this.donationRepo.findById(id);
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
