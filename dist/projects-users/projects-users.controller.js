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
exports.ProjectUsersController = void 0;
const common_1 = require("@nestjs/common");
const transform_interceptor_1 = require("../interceptor/transform.interceptor");
const user_entity_1 = require("../users/entities/user.entity");
const create_project_user_1 = require("./dto/create.project-user");
const projects_users_service_1 = require("./projects-users.service");
let ProjectUsersController = class ProjectUsersController {
    constructor(projectUsersService) {
        this.projectUsersService = projectUsersService;
    }
    async postProjectUsers(createProjectUserDto, req) {
        const user = req['user'];
        if (user.role === user_entity_1.UserRole.Employee)
            throw new common_1.UnauthorizedException();
        return this.projectUsersService.create(createProjectUserDto);
    }
    async findAll() {
        console.log('PU >>> findAll');
        return this.projectUsersService.getAll();
    }
    async getProjectUserById(id) {
        const projectMember = await this.projectUsersService.getById(id);
        if (projectMember)
            return projectMember;
        throw new common_1.NotFoundException();
    }
};
exports.ProjectUsersController = ProjectUsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_user_1.CreateProjectUserDto, Object]),
    __metadata("design:returntype", Promise)
], ProjectUsersController.prototype, "postProjectUsers", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectUsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectUsersController.prototype, "getProjectUserById", null);
exports.ProjectUsersController = ProjectUsersController = __decorate([
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, common_1.Controller)('/project-users'),
    __metadata("design:paramtypes", [projects_users_service_1.ProjectUsersService])
], ProjectUsersController);
//# sourceMappingURL=projects-users.controller.js.map