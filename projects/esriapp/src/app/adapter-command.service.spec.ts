import { TestBed } from '@angular/core/testing';

import { AdapterCommandService } from './adapter-command.service';

describe('AdapterCommandService', () => {
  let service: AdapterCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdapterCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
