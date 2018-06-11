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

    @property({
        type: 'number',
    })
    userid: number;

    @property({
        type: 'number',
    })
    roleid: number;

    getId() {
        return this.id;
    }
}