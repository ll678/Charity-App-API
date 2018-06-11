import { Entity } from '@loopback/repository';
export declare class UserAddress extends Entity {
    id?: number;
    aptnumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    getId(): number | undefined;
}
