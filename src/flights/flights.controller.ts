import { Controller, Get, Param } from '@nestjs/common';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
    constructor(private readonly flightService: FlightsService) {}

    @Get()
    findAll(): Promise<Flights[]> {
        return this.flightService.findAll();
    }

    @Get("/:id")
    findOne(@Param() param): Promise<Flights[]> {
        return this.flightService.findOne(param.id);
    }
}
