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
exports.ProjectUsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const projects_service_1 = require("../projects/projects.service");
const users_service_1 = require("../users/users.service");
const project_user_entity_1 = require("./entities/project-user.entity");
let ProjectUsersService = class ProjectUsersService {
    constructor(projectsUserRepository, usersService, projectsService) {
        this.projectsUserRepository = projectsUserRepository;
        this.usersService = usersService;
        this.projectsService = projectsService;
    }
    async create(dto) {
        const user = await this.usersService.getUserById(dto.userId);
        if (!user)
            throw new common_1.NotFoundException();
        const project = await this.projectsService.getProjectById(dto.projectId);
        if (!project)
            throw new common_1.NotFoundException();
        const dates = await this.projectsUserRepository.findBy({ userId: user.id });
        for (const date of dates) {
            const overlap = Math.max(Math.min(dto.endDate.getTime(), date.endDate.getTime()) -
                Math.max(dto.startDate.getTime(), date.startDate.getTime()), 0);
            if (overlap > 0)
                throw new common_1.ConflictException("This user isn't free for the given period.");
        }
        return this.projectsUserRepository.save(this.projectsUserRepository.create(dto));
    }
    async getById(id) {
        return this.projectsUserRepository.findOneBy({ id });
    }
    async getAll() {
        return this.projectsUserRepository.find();
    }
    async getProjectsByUserProject(user, project) {
        return this.projectsUserRepository.findOneBy({ userId: user.id, projectId: project.id });
    }
};
exports.ProjectUsersService = ProjectUsersService;
exports.ProjectUsersService = ProjectUsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_user_entity_1.ProjectUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        projects_service_1.ProjectsService])
], ProjectUsersService);
//# sourceMappingURL=projects-users.service.js.map