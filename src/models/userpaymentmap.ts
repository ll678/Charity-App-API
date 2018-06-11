import { Entity, property, model } from '@loopback/repository';

@model({
    name: "userpaymentmap"
})
export class UserPaymentMap extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    getId() {
        return this.id;
    }
}