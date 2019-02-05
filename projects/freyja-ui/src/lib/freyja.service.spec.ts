import { TestBed } from '@angular/core/testing';

import { FreyjaService } from './freyja.service';

describe('FreyjaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreyjaService = TestBed.get(FreyjaService);
    expect(service).toBeTruthy();
  });
});
