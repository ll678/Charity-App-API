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
const user_repository_1 = require("../repositories/user.repository");
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = require("jsonwebtoken");
let EditProfileController = class EditProfileController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async updateProfile(body) {
        var update = body.user;
        var user = await this.userRepo.findById(update.id);
        user.username = update.username;
        user.firstname = update.firstname;
        user.lastname = update.lastname;
        user.email = update.email;
        user.phonenumber = update.phonenumber;
        user.id = update.id;
        await this.userRepo.save(user);
        var jwt = jsonwebtoken_1.sign({
            user: {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                username: user.username,
                phonenumber: user.phonenumber,
            },
            anything: "hello"
        }, 'shh', {
            issuer: 'auth.ix.co.za',
            audience: 'ix.co.za',
        });
        return {
            token: jwt
        };
    }
};
__decorate([
    rest_1.put('/user/editProfile'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EditProfileController.prototype, "updateProfile", null);
EditProfileController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], EditProfileController);
exports.EditProfileController = EditProfileController;
//# sourceMappingURL=editProfile.controller.js.map