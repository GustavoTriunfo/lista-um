import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculadoraService } from './calculadora/calculadora.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CalculadoraService],
})
export class AppModule {}
