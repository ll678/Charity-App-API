import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    createCharity(charity: Charity): Promise<Charity>;
    findCharity(): Promise<Charity[]>;
    findCharityById(id: number): Promise<Charity>;
    getUserInformation(jwt: string): Promise<any>;
}
