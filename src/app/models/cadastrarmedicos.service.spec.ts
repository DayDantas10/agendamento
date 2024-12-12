import { TestBed } from '@angular/core/testing';

import { CadastrarmedicosService } from './cadastrarmedicos.service';

describe('CadastrarmedicosService', () => {
  let service: CadastrarmedicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarmedicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
