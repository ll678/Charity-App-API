import { Entity } from '@loopback/repository';
export declare class Payment extends Entity {
    id?: number;
    name: string;
    cardnumber: string;
    expiry: string;
    CVV: number;
    bank: string;
    nickname: string;
    getId(): number | undefined;
}
