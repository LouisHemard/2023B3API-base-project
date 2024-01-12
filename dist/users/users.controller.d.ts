import { Request as ExpressRequest } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(dto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    me(req: ExpressRequest): Promise<User>;
    findAll(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
}
