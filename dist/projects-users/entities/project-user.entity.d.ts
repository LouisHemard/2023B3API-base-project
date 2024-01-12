import { Project } from '../../projects/entities/project.entity';
import { User } from '../../users/entities/user.entity';
export declare class ProjectUser {
    readonly id: string;
    startDate: Date;
    endDate: Date;
    projectId: string;
    project: Project;
    userId: string;
    user: User;
}
