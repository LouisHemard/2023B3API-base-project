import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '../users.service';
export declare class AuthGuard implements CanActivate {
    private readonly users;
    private readonly reflector;
    constructor(users: UsersService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
