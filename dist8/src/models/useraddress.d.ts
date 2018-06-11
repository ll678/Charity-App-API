import { Entity } from '@loopback/repository';
export declare class UserAddress extends Entity {
    id?: number;
    aptnumber: number;
    street: string;
    city: string;
    state: string;
    country: string;
    getId(): number | undefined;
}
