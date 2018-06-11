import { Entity } from '@loopback/repository';
export declare class Donation extends Entity {
    id?: number;
    amount: number;
    datefrom: string;
    getId(): number | undefined;
}
