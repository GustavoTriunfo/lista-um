import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  pagar(tipo: string): string {
    const pagamentos: Record<string, string> = {
      pix: 'Pagamento via Pix',
      cartao: 'Pagamento via Cartão',
      boleto: 'Pagamento via Boleto',
    };

    return pagamentos[tipo.toLowerCase()]
      ?? (() => { throw new BadRequestException('Tipo inválido'); })()
  }

}
