export type EventStatus = 'Pending' | 'Accepted' | 'Declined';
export type EventType = 'RemoteWork' | 'PaidLeave';
export declare class Event {
    readonly id: string;
    date: Date;
    eventStatus?: EventStatus;
    eventType: EventType;
    eventDescription?: string;
    userId: string;
}
