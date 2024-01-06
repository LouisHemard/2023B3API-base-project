import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from '../../users/entities/user.entity';

@Entity()
export class ProjectUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    public startDate!: Date;

    @Column()
    public endDate!: Date;

    @Column()
    public projectId!: string;

    @Column()
    public userId!: string; 
}
