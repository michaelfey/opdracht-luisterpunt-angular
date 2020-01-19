import { TestBed } from '@angular/core/testing';

import { DecreetService } from './decreet.service';

describe('DecreetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecreetService = TestBed.get(DecreetService);
    expect(service).toBeTruthy();
  });
});
