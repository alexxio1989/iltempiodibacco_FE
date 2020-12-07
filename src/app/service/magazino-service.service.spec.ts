import { TestBed } from '@angular/core/testing';

import { MagazinoServiceService } from './magazino-service.service';

describe('MagazinoServiceService', () => {
  let service: MagazinoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagazinoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
