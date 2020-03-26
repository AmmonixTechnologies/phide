import { TestBed } from '@angular/core/testing';

import { SimulatedDataBaseService } from './simulated-data-base.service';

describe('SimulatedDataBaseService', () => {
  let service: SimulatedDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulatedDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
