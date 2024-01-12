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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("./entities/project.entity");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/entities/user.entity");
let ProjectsService = class ProjectsService {
    constructor(projectsRepository, usersService) {
        this.projectsRepository = projectsRepository;
        this.usersService = usersService;
    }
    async create(createProjectDto) {
        const user = await this.usersService.getUserById(createProjectDto.referringEmployeeId);
        if (!user)
            throw new common_1.NotFoundException();
        if (user && user.role === user_entity_1.UserRole.Employee)
            throw new common_1.UnauthorizedException();
        const newProject = this.projectsRepository.create(createProjectDto);
        return Object.assign(Object.assign({}, await this.projectsRepository.save(newProject)), { referringEmployee: user });
    }
    async getProjectById(id) {
        return this.projectsRepository.findOneBy({ id });
    }
    async getAll() {
        return this.projectsRepository.find();
    }
    async findAll() {
        return this.projectsRepository.find({ relations: ['referringEmployee', 'members'] });
    }
    async findProjectsDependingOnUser(user) {
        const projects = await this.findAll();
        if (user.role === user_entity_1.UserRole.Employee) {
            return projects.filter(p => p.members.find(pu => pu.userId === user.id));
        }
        return projects;
    }
    async getUsersProjects(user) {
        return this.projectsRepository.findBy({ referringEmployeeId: user.id });
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map