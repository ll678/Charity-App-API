import { Entity, property, model } from '@loopback/repository';

@model({
    name: "userrolemap"
})
export class UserRoleMap extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    getId() {
        return this.id;
    }
}