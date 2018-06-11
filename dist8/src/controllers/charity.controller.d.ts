import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    getAllCharity(): Promise<Array<Charity>>;
    findCharityById(id: number): Promise<Charity>;
}
