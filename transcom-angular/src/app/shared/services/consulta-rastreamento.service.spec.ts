import { TestBed } from '@angular/core/testing';

import { ConsultaRastreamentoService } from './consulta-rastreamento.service';

describe('ConsultaRastreamentoService', () => {
  let service: ConsultaRastreamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaRastreamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
