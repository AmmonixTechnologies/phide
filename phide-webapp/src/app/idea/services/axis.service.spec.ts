import { TestBed } from '@angular/core/testing';

import { AxisService } from './axis.service';

describe('AxisService', () => {
  let service: AxisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
