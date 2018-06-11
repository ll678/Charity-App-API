import { Entity, property, model } from '@loopback/repository';

@model({
    name: "login"
})
export class Login extends Entity {

    @property({
        type: 'string',
        required: true
    })
    username: string;

    @property({
        type: 'string',
        required: true
    })
    password: string;

}