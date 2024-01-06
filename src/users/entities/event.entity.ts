import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public date!: Date;

    @Column()
    public eventStatus?: 'Pending' | 'Accepted' | 'Declined';

    @Column()
    public eventType!: 'RemoteWork' | 'PaidLeave';

    @Column()
    public eventDescription?: string;

    @Column()
    public userId!: string; 
}

