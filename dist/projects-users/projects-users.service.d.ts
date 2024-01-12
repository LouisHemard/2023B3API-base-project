import { Repository } from 'typeorm';
import { Project } from '../projects/entities/project.entity';
import { ProjectsService } from '../projects/projects.service';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateProjectUserDto } from './dto/create.project-user';
import { ProjectUser } from './entities/project-user.entity';
export declare class ProjectUsersService {
    private projectsUserRepository;
    private usersService;
    private projectsService;
    constructor(projectsUserRepository: Repository<ProjectUser>, usersService: UsersService, projectsService: ProjectsService);
    create(dto: CreateProjectUserDto): Promise<ProjectUser>;
    getById(id: string): Promise<ProjectUser>;
    getAll(): Promise<ProjectUser[]>;
    getProjectsByUserProject(user: User, project: Project | null): Promise<ProjectUser | null>;
}
