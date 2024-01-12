import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
export declare class ProjectsService {
    private projectsRepository;
    private usersService;
    constructor(projectsRepository: Repository<Project>, usersService: UsersService);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    getProjectById(id: string): Promise<Project | null>;
    getAll(): Promise<Project[]>;
    findAll(): Promise<Project[]>;
    findProjectsDependingOnUser(user: User): Promise<Project[]>;
    getUsersProjects(user: User): Promise<Project[]>;
}
