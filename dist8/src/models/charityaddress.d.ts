import { Entity } from '@loopback/repository';
export declare class CharityAddress extends Entity {
    id?: number;
    aptnumber: number;
    street: string;
    city: string;
    state: string;
    country: string;
    getId(): number | undefined;
}
