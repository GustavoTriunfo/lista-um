import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {
    somar(primeiroOperador: number, segundoOperador: number): number{
        return primeiroOperador + segundoOperador
    }
}
