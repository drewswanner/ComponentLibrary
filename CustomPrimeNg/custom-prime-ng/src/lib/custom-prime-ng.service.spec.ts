import { TestBed } from '@angular/core/testing';

import { CustomPrimeNgService } from './custom-prime-ng.service';

describe('CustomPrimeNgService', () => {
  let service: CustomPrimeNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPrimeNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
