import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Project } from './entities/project.entity'
import { CreateProjectDto } from '../projects/dto/create-project.dto'
import { UsersService } from '../users/users.service'
import { UserRole } from '../users/entities/user.entity'


@Injectable()
export class ProjectsService {
  
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
    private usersService: UsersService
  ) { }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const user = await this.usersService.getUserById(createProjectDto.referringEmployeeId)
    if(user && user.role === UserRole.Employee)
      throw new UnauthorizedException()
    const newProject = this.projectsRepository.create(createProjectDto)
    return {
      ...await this.projectsRepository.save(newProject), 
      referringEmployee: user
    }
  }

  async getProjectById(id: string): Promise<Project> {
    return this.projectsRepository.findOneBy({ id })
  }

  async getAll(): Promise<Project[]> {
    return this.projectsRepository.find()
  }
}