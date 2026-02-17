import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  verificarIdade(idade: number): string{
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
  }
}
