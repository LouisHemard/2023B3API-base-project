import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectUser } from './entities/project-user.entity'
import { ProjectUsersController } from './project-users.controleur'
import { ProjectUserService } from './project-users.service'
import { UsersModule } from '../users/users.module'

@Module({
  imports: [TypeOrmModule.forFeature([ProjectUser]), UsersModule],
  controllers: [ProjectUsersController],
  providers: [ProjectUserService],
  exports: [ProjectUserService]
})

export class ProjectUserModule {}