import { IsNotEmpty, IsEmail, Length, IsString, MinLength, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { Project } from '../entities/project.entity';

export class CreateProjectDto {

  @IsString()
  @MinLength(3) 
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  referringEmployeeId!: string;
}