export declare enum UserRole {
    Employee = "Employee",
    Admin = "Admin",
    ProjectManager = "ProjectManager"
}
export declare class User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: UserRole;
}
