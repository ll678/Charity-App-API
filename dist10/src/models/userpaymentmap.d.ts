import { Entity } from '@loopback/repository';
export declare class UserPaymentMap extends Entity {
    id?: number;
    userid: number;
    paymentid: number;
    getId(): number | undefined;
}
