import { TestBed } from '@angular/core/testing';

import { CadastrarhorariosService } from './cadastrarhorarios.service';

describe('CadastrarhorariosService', () => {
  let service: CadastrarhorariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarhorariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
