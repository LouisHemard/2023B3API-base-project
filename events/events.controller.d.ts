import { CreateEventDto } from './dto/create-event.dto';
import { EventService } from './events.service';
import { Event } from './entities/event.entity';
export declare class EventsController {
    private readonly eventService;
    private readonly projectUserService;
    constructor(eventService: EventService, projectUserService: EventService);
    create(createEventDto: CreateEventDto, req: any): Promise<Event>;
    getEvent(event: string): Promise<Event>;
    findAll(): Promise<CreateEventDto[]>;
}
