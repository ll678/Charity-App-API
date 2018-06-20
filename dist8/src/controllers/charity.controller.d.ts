import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    createCharity(jwt: string, charity: Charity): Promise<Charity>;
    findCharity(jwt: string): Promise<Charity[]>;
    findCharityById(jwt: string, id: number): Promise<Charity>;
    getUserInformation(jwt: string): Promise<any>;
    addMyCharity(id: number): Promise<void>;
    removeMyCharity(id: number): Promise<void>;
    findMyCharities(): Promise<Array<Charity>>;
}
