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
const donation_repository_1 = require("../repositories/donation.repository");
const rest_1 = require("@loopback/rest");
const donation_1 = require("../models/donation");
const jsonwebtoken_1 = require("jsonwebtoken");
let DonationController = class DonationController {
    constructor(donationRepo) {
        this.donationRepo = donationRepo;
    }
    async createDonation(donation) {
        return await this.donationRepo.create(donation);
    }
    async findDonation() {
        return await this.donationRepo.find();
    }
    async findCharityById(id) {
        // Check for valid ID
        let donationExists = !!(await this.donationRepo.count({ id }));
        if (!donationExists) {
            throw new rest_1.HttpErrors.BadRequest(`Unfortunately donation ID ${id} does not exist in our system.`);
        }
        return await this.donationRepo.findById(id);
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
    rest_1.post('/donation'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donation_1.Donation]),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "createDonation", null);
__decorate([
    rest_1.get('/donation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "findDonation", null);
__decorate([
    rest_1.get('/donation/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "findCharityById", null);
__decorate([
    rest_1.get('/me'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "getUserInformation", null);
DonationController = __decorate([
    __param(0, repository_1.repository(donation_repository_1.DonationRepository.name)),
    __metadata("design:paramtypes", [donation_repository_1.DonationRepository])
], DonationController);
exports.DonationController = DonationController;
//# sourceMappingURL=donation.controller.js.map