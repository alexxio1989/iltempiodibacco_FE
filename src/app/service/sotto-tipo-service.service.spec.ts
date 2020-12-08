import { TestBed } from '@angular/core/testing';

import { SottoTipoServiceService } from './sotto-tipo-service.service';

describe('SottoTipoServiceService', () => {
  let service: SottoTipoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SottoTipoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
