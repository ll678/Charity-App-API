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
        type: 'number',
    })
    datefrom: Date;

    getId() {
        return this.id;
    }
}