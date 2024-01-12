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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const users_service_1 = require("../users.service");
const public_access_decorator_1 = require("../../public-access.decorator");
let AuthGuard = class AuthGuard {
    constructor(users, reflector) {
        this.users = users;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const publicAccess = this.reflector.getAllAndOverride(public_access_decorator_1.PublicAccess, [context.getClass(), context.getHandler()]);
        if (publicAccess)
            return true;
        const req = context.switchToHttp().getRequest();
        if (req.headers.authorization) {
            const token = extractJwtFromHeader(req.headers.authorization);
            if (token) {
                const payload = await this.users.verifyToken(token);
                if (payload && payload.id) {
                    const user = await this.users.getUserById(payload.id);
                    if (user) {
                        req['user'] = user;
                        return true;
                    }
                }
            }
        }
        throw new common_1.UnauthorizedException();
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        core_1.Reflector])
], AuthGuard);
function extractJwtFromHeader(authorizationHeader) {
    const [type, token] = authorizationHeader.split(' ');
    return (type === null || type === void 0 ? void 0 : type.toLowerCase()) === 'bearer' ? token : null;
}
//# sourceMappingURL=auth.guard.js.map