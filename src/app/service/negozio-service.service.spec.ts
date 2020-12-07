import { TestBed } from '@angular/core/testing';

import { NegozioServiceService } from './negozio-service.service';

describe('NegozioServiceService', () => {
  let service: NegozioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegozioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
