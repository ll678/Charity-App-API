import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { Charity } from "../models/charity";

export class CharityController {
  constructor(
    @repository(CharityRepository.name) private charityRepo: CharityRepository
  ) { }

  @get('/charityTable')
  async findCharity(): Promise<Charity[]> {
    return await this.charityRepo.find();
  }

  @get('/charityTable/{id}')
  async findCharityById(@param.path.number('id') id: number): Promise<Charity> {

    // Check for valid ID
    let charityExists: boolean = !!(await this.charityRepo.count({ id }));
    if (!charityExists) {
      throw new HttpErrors.BadRequest(`Unfortunately charity ID ${id} does not exist in our system.`);
    }

    return await this.charityRepo.findById(id);
  }
}