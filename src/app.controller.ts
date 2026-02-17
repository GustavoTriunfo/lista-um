import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('teste')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('idade/:idade')
  verificarIdade(
    @Param('idade', ParseIntPipe) idade: number
  ): string {
    return this.appService.verificarIdade(idade);
  }
}
