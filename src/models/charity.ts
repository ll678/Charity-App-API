import { Entity, property, model } from '@loopback/repository';

@model({
    name: "charity"
})
export class Charity extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
    })
    name: string;

    @property({
        type: 'string',
    })
    mission: string;

    @property({
        type: 'string',
    })
    img: string;

    @property({
        type: 'string',
    })
    url: string;

    @property({
        type: 'string',
    })
    bank: string;

    @property({
        type: 'number',
    })
    accountnumber: number;

    getId() {
        return this.id;
    }
}