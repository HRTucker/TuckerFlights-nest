import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Flight } from './flight.model';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
    constructor(private readonly flightService: FlightsService) {}

    // CREATE
    @Post()
    async create(@Body() flight: Flight): Promise<Flights[]> {
        return this.flightService.create(flight);
    }

    //Read All
    @Get()
    findAll(): Promise<Flights[]> {
        return this.flightService.findAll();
    }

    // QUERY
    @Get("query/:orig/:dest")
    async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
        return this.flightService.query(orig, dest);
    }

    // READ ONE
    @Get(":id")
    async findOne(@Param() param): Promise<Flight> {
        return this.flightService.findOne(param.id);
    }

    // UPDATE
    @Patch(":id/update")
    async update(@Param('id') id, @Body() flight: Flight): Promise<any> {
        flight.id = Number(id);
        return this.flightService.update(flight);
    }

    // DELETE
    @Delete(":id/delete")
    async delete(@Param('id') id): Promise<any> {
        return this.flightService.delete(id);
    }

    //Retrieving all origins
    @Get("cities/origins")
    getOrigins(): Promise<String[]>{
        return this.flightService.getFlightOrigins();
    }

    //Retrieving all destinations
    @Get("cities/destinations")
    getDestinations(): Promise<String[]>{
        return this.flightService.getFlightDestinations();
    }
}
