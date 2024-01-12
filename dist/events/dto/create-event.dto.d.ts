import { EventStatus, EventType } from '../entities/event.entity';
export declare class CreateEventDto {
    id: string;
    date: Date;
    eventStatus?: EventStatus;
    eventType: EventType;
    eventDescription?: string;
    userId: string;
}
