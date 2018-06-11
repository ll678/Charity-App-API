import { Entity, property, model } from '@loopback/repository';

@model({
    name: "userPaymentMap"
})
export class UserPaymentMap extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
    })
    userid: number;

    @property({
        type: 'number',
    })
    paymentid: number;

    getId() {
        return this.id;
    }
}