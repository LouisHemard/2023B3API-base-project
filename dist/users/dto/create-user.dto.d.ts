import { UserRole } from '../entities/user.entity';
export declare class CreateUserDto {
    username: string;
    password: string;
    email: string;
    role?: UserRole;
}
