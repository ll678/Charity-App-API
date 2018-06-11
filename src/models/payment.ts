import { Entity, property, model } from '@loopback/repository';

@model({
    name: "payment"
})
export class Payment extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
    })
    cardnumber: string;

    @property({
        type: 'string',
    })
    expirationdate: string;

    @property({
        type: 'string',
    })
    bank: string;

    getId() {
        return this.id;
    }
}