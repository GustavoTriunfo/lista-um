import { Injectable } from '@nestjs/common';

@Injectable()
export class OlaService {
    falar(nome: string): string{
        return `olá, ${nome}!`
    }
}
