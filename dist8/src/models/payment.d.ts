import { Entity } from '@loopback/repository';
export declare class Payment extends Entity {
    id?: number;
    cardnumber: string;
    expirationdate: string;
    bank: string;
    getId(): number | undefined;
}
