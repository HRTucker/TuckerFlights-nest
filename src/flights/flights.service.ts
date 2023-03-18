import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flights } from './flights.entity';

@Injectable()
export class FlightsService {
    constructor(
        @InjectRepository(Flights)
        private readonly flightRepository: Repository<Flights>,
    ) { }

    async findAll(): Promise<Flights[]> {
        return this.flightRepository.find();
    }

    async findOne(id: any): Promise<any> {
        return this.flightRepository.findOne(id);
    }
}
