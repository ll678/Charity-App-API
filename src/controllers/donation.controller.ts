import { repository } from "@loopback/repository";
import { DonationRepository } from "../repositories/donation.repository";
import { post, get, requestBody } from "@loopback/rest";
import { Donation } from "../models/donation";

export class DonationController {
  constructor(
    @repository(DonationRepository.name) private donationRepo: DonationRepository
  ) {}

  @post('/donation')
  async createDonation(@requestBody() donation: Donation) {
    return await this.donationRepo.create(donation);
  }
}
