import { Entity } from '@loopback/repository';
export declare class UserRoleMap extends Entity {
    id?: number;
    userid: number;
    roleid: number;
    getId(): number | undefined;
}
