import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    findCharity(): Promise<Charity[]>;
    findCharityById(id: number): Promise<Charity>;
}
