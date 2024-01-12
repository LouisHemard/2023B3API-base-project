import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(dto: LoginUserDto): Promise<string>;
    verifyToken(token: string): Promise<{
        id: string;
    } | null>;
    getUserById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
}
