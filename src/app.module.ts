import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectUserModule } from './project-users/project-users.module'
import { Project } from './projects/entities/project.entity'
import { ProjectsModule } from './projects/projects.module'
import { AuthGuard } from './users/auth/auth.guard'
import { User } from './users/entities/user.entity'
import { UsersModule } from './users/users.module'
import { ProjectUser } from './project-users/entities/project-user.entity'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User,Project, ProjectUser],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule, ProjectsModule, ProjectUserModule
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
})
export class AppModule { }
