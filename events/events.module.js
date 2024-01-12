"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("./entities/event.entity");
const events_controller_1 = require("./events.controller");
const events_service_1 = require("./events.service");
const projects_users_module_1 = require("../projects-users/projects-users.module");
const users_module_1 = require("../users/users.module");
let EventsModule = class EventsModule {
};
exports.EventsModule = EventsModule;
exports.EventsModule = EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([event_entity_1.Event]),
            (0, common_1.forwardRef)(() => projects_users_module_1.ProjectUsersModule),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        controllers: [
            events_controller_1.EventsController,
        ],
        providers: [
            events_service_1.EventService,
        ],
        exports: [events_service_1.EventService],
    })
], EventsModule);
//# sourceMappingURL=events.module.js.map