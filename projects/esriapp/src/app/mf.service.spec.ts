import { TestBed } from '@angular/core/testing';

import { MFService } from './mf.service';

describe('MFService', () => {
  let service: MFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
