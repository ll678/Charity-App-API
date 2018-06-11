import { Entity, property, model } from '@loopback/repository';

@model({
    name: "role"
})
export class Role extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
    })
    role: string;

    getId() {
        return this.id;
    }
}