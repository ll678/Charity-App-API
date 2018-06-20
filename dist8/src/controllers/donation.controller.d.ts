import { DonationRepository } from "../repositories/donation.repository";
import { Donation } from "../models/donation";
export declare class DonationController {
    private donationRepo;
    constructor(donationRepo: DonationRepository);
    createDonation(jwt: string, donation: Donation): Promise<Donation>;
    findDonation(jwt: string): Promise<Donation[]>;
    findCharityById(jwt: string, id: number): Promise<Donation>;
    getUserInformation(jwt: string): Promise<any>;
}
