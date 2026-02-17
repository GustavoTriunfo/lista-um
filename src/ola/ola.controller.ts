import { Controller, Get, Param } from '@nestjs/common';
import { OlaService } from './ola.service';

@Controller('ola')
export class OlaController {
    constructor(private readonly olaService: OlaService){}

    @Get(':nome')
    falar(@Param('nome') nome: string): string{
        return this.olaService.falar(nome);
    }
}
