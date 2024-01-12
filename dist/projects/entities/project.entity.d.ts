import { User } from '../../users/entities/user.entity';
import { ProjectUser } from '../../projects-users/entities/project-user.entity';
export declare class Project {
    id: string;
    name: string;
    referringEmployeeId: string;
    referringEmployee: User;
    members: ProjectUser[];
}
