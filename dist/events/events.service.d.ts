import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/event.entity';
export declare class EventService {
    private eventRepository;
    constructor(eventRepository: Repository<Event>);
    create(createEventDto: CreateEventDto): Promise<Event>;
    getById(id: string): Promise<Event>;
    findAll(): Promise<Event[]>;
}
