import { Entity, property, model } from '@loopback/repository';

@model({
    name: "useraddress"
})
export class UserAddress extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
    })
    aptnumber: string;

    @property({
        type: 'string',
    })
    street: string;

    @property({
        type: 'string',
    })
    city: string;

    @property({
        type: 'string',
    })
    state: string;

    @property({
        type: 'string',
    })
    country: string;

    @property({
        type: 'string',
    })
    zipcode: string;

    getId() {
        return this.id;
    }
}