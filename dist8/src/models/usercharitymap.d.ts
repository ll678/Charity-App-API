import { Entity } from '@loopback/repository';
export declare class UserCharityMap extends Entity {
    id?: number;
    userid: number;
    charityid: number;
    getId(): number | undefined;
}
