import { Entity, property, model } from '@loopback/repository';

@model({
    name: "usercharitymap"
})
export class UserCharityMap extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    getId() {
        return this.id;
    }
}