"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const events_module_1 = require("./events/events.module");
const transform_interceptor_1 = require("./interceptor/transform.interceptor");
const project_user_entity_1 = require("./projects-users/entities/project-user.entity");
const projects_users_module_1 = require("./projects-users/projects-users.module");
const project_entity_1 = require("./projects/entities/project.entity");
const projects_module_1 = require("./projects/projects.module");
const auth_guard_1 = require("./users/auth/auth.guard");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: [user_entity_1.User, project_entity_1.Project, project_user_entity_1.ProjectUser, Event],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            projects_module_1.ProjectsModule,
            projects_users_module_1.ProjectUsersModule,
            events_module_1.EventsModule,
        ],
        controllers: [],
        providers: [{
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard
            }, {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_interceptor_1.TransformInterceptor
            },
            {
                provide: core_1.APP_PIPE,
                useValue: new common_1.ValidationPipe({ transform: true })
            }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map