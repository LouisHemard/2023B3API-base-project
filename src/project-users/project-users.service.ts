import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProjectUser } from './entities/project-user.entity'
import { UsersService } from '../users/users.service'
import { User, UserRole } from '../users/entities/user.entity'
import { CreateProjectUserDto } from './dto/create-project-user.dto'
import { Project } from '../projects/entities/project.entity'


@Injectable()
export class ProjectUserService {
  constructor(
    @InjectRepository(ProjectUser)
    private projectUserRepository: Repository<ProjectUser>,
    private usersService: UsersService
  ) { }

  async create(createProjectUserDto: CreateProjectUserDto): Promise<ProjectUser> {
    const user = await this.usersService.getUserById(createProjectUserDto.userId)
    if(user && user.role === UserRole.Employee)
      throw new UnauthorizedException()
    const projectMember = this.projectUserRepository.create(createProjectUserDto)
    return this.projectUserRepository.save(projectMember)
  }

  async getById(id: string): Promise<ProjectUser | null> {
    return this.projectUserRepository.findOneBy({ id })
  }

  async getAll(): Promise<ProjectUser[]> {
    return this.projectUserRepository.find()
  }

  async getByUserAndProject(user: User, project: Project | null): Promise<ProjectUser | null> {
    return this.projectUserRepository.findOneBy({ userId: user.id, projectId: project.id })
  }
}