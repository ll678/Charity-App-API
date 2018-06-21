import { Entity, property, model } from '@loopback/repository';

@model({
    name: "donation"
})
export class Donation extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
    })
    amount: number;

    @property({
        type: 'string',
    })
    datefrom: string;

    @property({
        type: 'number',
    })
    charityid: number;

    getId() {
        return this.id;
    }
}