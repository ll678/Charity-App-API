import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    id?: number;
    name: string;
    mission: string;
    img: string;
    url: string;
    bank: string;
    accountnumber: string;
    getId(): number | undefined;
}
