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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/entities/user.entity");
const create_project_dto_1 = require("./dto/create-project.dto");
const projects_service_1 = require("./projects.service");
const projects_users_service_1 = require("../projects-users/projects-users.service");
let ProjectsController = class ProjectsController {
    constructor(projectsService, projectsUsersService) {
        this.projectsService = projectsService;
        this.projectsUsersService = projectsUsersService;
    }
    async postProject(createProjectDto, req) {
        const user = req['user'];
        if (user.role !== user_entity_1.UserRole.Admin)
            throw new common_1.UnauthorizedException();
        return this.projectsService.create(createProjectDto);
    }
    findAll() {
        return this.projectsService.getAll();
    }
    async getProjects(user) {
        return this.projectsService.getUsersProjects(user);
    }
    async getProjectById(id, req) {
        const user = req['user'];
        const project = await this.projectsService.getProjectById(id);
        if (!project)
            throw new common_1.NotFoundException();
        if (user.role === user_entity_1.UserRole.Employee) {
            const projectUser = await this.projectsUsersService.getProjectsByUserProject(user, project);
            if (!projectUser)
                throw new common_1.ForbiddenException();
        }
        return project;
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "postProject", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjects", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjectById", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService,
        projects_users_service_1.ProjectUsersService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map