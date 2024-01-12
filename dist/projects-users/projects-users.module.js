"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUsersModule = void 0;
const common_1 = require("@nestjs/common");
const projects_users_service_1 = require("./projects-users.service");
const projects_users_controller_1 = require("./projects-users.controller");
const typeorm_1 = require("@nestjs/typeorm");
const project_user_entity_1 = require("./entities/project-user.entity");
const users_module_1 = require("../users/users.module");
const projects_module_1 = require("../projects/projects.module");
let ProjectUsersModule = class ProjectUsersModule {
};
exports.ProjectUsersModule = ProjectUsersModule;
exports.ProjectUsersModule = ProjectUsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => projects_module_1.ProjectsModule),
            typeorm_1.TypeOrmModule.forFeature([project_user_entity_1.ProjectUser]),
        ],
        controllers: [projects_users_controller_1.ProjectUsersController],
        providers: [projects_users_service_1.ProjectUsersService],
        exports: [projects_users_service_1.ProjectUsersService],
    })
], ProjectUsersModule);
//# sourceMappingURL=projects-users.module.js.map