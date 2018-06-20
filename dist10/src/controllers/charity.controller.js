"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const charity_repository_1 = require("../repositories/charity.repository");
const rest_1 = require("@loopback/rest");
const charity_1 = require("../models/charity");
const jsonwebtoken_1 = require("jsonwebtoken");
let CharityController = class CharityController {
    constructor(charityRepo) {
        this.charityRepo = charityRepo;
    }
    async createCharity(jwt, charity) {
        //Make endpoints secure
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required.');
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            console.log(jwtBody);
        }
        catch (err) {
            throw new rest_1.HttpErrors.BadRequest('JWT token invalid');
        }
        //Post charities
        return await this.charityRepo.create(charity);
    }
    async findCharity(jwt) {
        //Make endpoints secure
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required.');
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            console.log(jwtBody);
        }
        catch (err) {
            throw new rest_1.HttpErrors.BadRequest('JWT token invalid');
        }
        //Find charities
        return await this.charityRepo.find();
    }
    async findCharityById(jwt, id) {
        //Make endpoints secure
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required.');
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            console.log(jwtBody);
        }
        catch (err) {
            throw new rest_1.HttpErrors.BadRequest('JWT token invalid');
        }
        //Check for valid ID
        let charityExists = !!(await this.charityRepo.count({ id }));
        if (!charityExists) {
            throw new rest_1.HttpErrors.BadRequest(`Unfortunately charity ID ${id} does not exist in our system.`);
        }
        //Find charity by ID
        return await this.charityRepo.findById(id);
    }
    //Passing user information
    async getUserInformation(jwt) {
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required.');
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            console.log(jwtBody);
            return jwtBody.user;
        }
        catch (err) {
            throw new rest_1.HttpErrors.BadRequest('JWT token invalid');
        }
    }
};
__decorate([
    rest_1.post('/charity'),
    __param(0, rest_1.param.query.string('jwt')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, charity_1.Charity]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "createCharity", null);
__decorate([
    rest_1.get('/charity'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "findCharity", null);
__decorate([
    rest_1.get('/charity/{id}'),
    __param(0, rest_1.param.query.string('jwt')),
    __param(1, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "findCharityById", null);
__decorate([
    rest_1.get('/me'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "getUserInformation", null);
CharityController = __decorate([
    __param(0, repository_1.repository(charity_repository_1.CharityRepository.name)),
    __metadata("design:paramtypes", [charity_repository_1.CharityRepository])
], CharityController);
exports.CharityController = CharityController;
//# sourceMappingURL=charity.controller.js.map