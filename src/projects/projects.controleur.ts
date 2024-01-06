import { Body, Controller, ForbiddenException, Get, NotFoundException, Param, ParseUUIDPipe, Post, Req, UnauthorizedException, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { Request as ExpressRequest } from 'express'
import { TransformInterceptor } from '../interceptor/transform.interceptor'
import { User, UserRole } from '../users/entities/user.entity'
import { CreateProjectDto } from './dto/create-project.dto'
import { Project } from './entities/project.entity'
import { ProjectsService } from './projects.service'
import { ProjectUserService } from '../project-users/project-users.service'


@UseInterceptors(TransformInterceptor)
@UsePipes(ValidationPipe)
@Controller('/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService, private readonly projectUserService: ProjectUserService) { }

  @Post()
  async postProject(@Body() createProjectDto: CreateProjectDto, @Req() req: ExpressRequest) : Promise<Project> {
    const user = req['user'] as User;
    if(user.role !== UserRole.Admin)
      throw new UnauthorizedException()
    return this.projectsService.create(createProjectDto)
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.getAll()
  }

  @Get('/:id')
  async getProjectById(@Param("id", ParseUUIDPipe) id: string, @Req() req: ExpressRequest): Promise<Project> {
    const user = req['user'] as User;
    const project = await this.projectsService.getProjectById(id)
    if (project && user.role === UserRole.Employee){
      const projectMember = await this.projectUserService.getByUserAndProject(user,project)
      if(!projectMember)
        throw new ForbiddenException()
    }
    if (project) return project
    throw new NotFoundException()
  }
}