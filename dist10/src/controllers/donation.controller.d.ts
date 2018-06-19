import { DonationRepository } from "../repositories/donation.repository";
import { Donation } from "../models/donation";
export declare class DonationController {
    private donationRepo;
    constructor(donationRepo: DonationRepository);
    createDonation(donation: Donation): Promise<Donation>;
    findDonation(): Promise<Donation[]>;
    findCharityById(id: number): Promise<Donation>;
    getUserInformation(jwt: string): Promise<any>;
}
