import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Project } from './entities/project.entity'
import { ProjectsController } from '../projects/projects.controleur'
import { ProjectsService } from './projects.service'
import { UsersModule } from '../users/users.module'
import { ProjectUserModule } from '../project-users/project-users.module'


@Module({
  imports: [TypeOrmModule.forFeature([Project]), UsersModule, ProjectUserModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService]
})

export class ProjectsModule {}