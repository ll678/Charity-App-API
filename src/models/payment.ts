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
    name: string;

    @property({
        type: 'string',
    })
    cardnumber: string;

    @property({
        type: 'string',
    })
    expiry: string;

    @property({
        type: 'number',
    })
    CVV: number;

    @property({
        type: 'string',
    })
    bank: string;

    @property({
        type: 'string',
    })
    nickname: string;

    getId() {
        return this.id;
    }
}