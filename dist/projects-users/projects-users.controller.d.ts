import { Request as ExpressRequest } from 'express';
import { ProjectUser } from './entities/project-user.entity';
import { CreateProjectUserDto } from './dto/create.project-user';
import { ProjectUsersService } from './projects-users.service';
export declare class ProjectUsersController {
    private readonly projectUsersService;
    constructor(projectUsersService: ProjectUsersService);
    postProjectUsers(createProjectUserDto: CreateProjectUserDto, req: ExpressRequest): Promise<ProjectUser>;
    findAll(): Promise<ProjectUser[]>;
    getProjectUserById(id: string): Promise<ProjectUser>;
}
