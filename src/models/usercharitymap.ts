import { Entity, property, model } from '@loopback/repository';

@model({
    name: "userCharityMap"
})
export class UserCharityMap extends Entity {

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
    charityid: number;

    getId() {
        return this.id;
    }
}