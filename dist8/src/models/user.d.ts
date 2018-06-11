import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    password: string;
    getId(): number | undefined;
}
