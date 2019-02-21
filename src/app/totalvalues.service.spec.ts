import { TestBed } from '@angular/core/testing';

import { TotalvaluesService } from './totalvalues.service';

describe('TotalvaluesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TotalvaluesService = TestBed.get(TotalvaluesService);
    expect(service).toBeTruthy();
  });
});
