import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculadoraService } from './calculadora/calculadora.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly calculadoraService: CalculadoraService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('somar')
  pagar(
    @Query('a', ParseIntPipe)valorUm, 
    @Query('b', ParseIntPipe)valorDois
  ) : number{
    return this.calculadoraService.somar(valorUm, valorDois);
  }
}
