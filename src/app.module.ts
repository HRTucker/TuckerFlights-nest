import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { FlightsController } from './flights/flights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from './flights/flights.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '46285',
      database: 'transportation',
      entities: [Flights],
      synchronize: true,
    }),
    FlightsModule,
  ],
})
export class AppModule {}
