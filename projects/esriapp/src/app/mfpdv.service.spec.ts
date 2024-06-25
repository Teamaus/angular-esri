import { TestBed } from '@angular/core/testing';

import { MFPDVService } from './mfpdv.service';

describe('MFPDVService', () => {
  let service: MFPDVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MFPDVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
