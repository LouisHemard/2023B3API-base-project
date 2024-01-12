import { Request as ExpressRequest } from 'express';
import { User } from '../users/entities/user.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';
import { ProjectUsersService } from '../projects-users/projects-users.service';
export declare class ProjectsController {
    private readonly projectsService;
    private readonly projectsUsersService;
    constructor(projectsService: ProjectsService, projectsUsersService: ProjectUsersService);
    postProject(createProjectDto: CreateProjectDto, req: ExpressRequest): Promise<Project>;
    findAll(): Promise<Project[]>;
    getProjects(user: User): Promise<Project[]>;
    getProjectById(id: string, req: ExpressRequest): Promise<Project | null>;
}
