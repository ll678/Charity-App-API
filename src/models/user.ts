import { Entity, property, model } from '@loopback/repository';

@model({
    name: "user"
})
export class User extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
    })
    username: string;

    @property({
        type: 'string',
    })
    firstname: string;

    @property({
        type: 'string',
    })
    lastname: string;

    @property({
        type: 'string',
    })
    email: string;

    @property({
        type: 'string',
    })
    phonenumber: string;

    @property({
        type: 'string',
    })
    password: string;

    getId() {
        return this.id;
    }
}