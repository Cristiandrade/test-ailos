import { Injectable } from '@angular/core';

@Injectable()
export class AddCooperateService {
  constructor() {}

  getCooperateByCpf(cpf: string) {
    if (cpf === '04559791031') {
      return {
        name: 'Mariane de Souza Oliveira',
        cpfSitutation: 'Regular',
        cooperative: 'Viacredi',
        numberCountAplication: '557932-4',
        numberCurrentAccount: '778461-8',
      };
    } else {
      return null;
    }
  }
}
