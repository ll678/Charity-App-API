import { Entity, property, model } from '@loopback/repository';

@model({
    name: "charityaddress"
})
export class CharityAddress extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
    })
    aptnumber: number;

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
        type: 'number',
    })
    country: number;

    getId() {
        return this.id;
    }
}