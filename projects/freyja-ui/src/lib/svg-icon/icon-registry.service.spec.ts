import { TestBed } from '@angular/core/testing';

import { IconRegistryService } from './icon-registry.service';

describe('IconRegistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IconRegistryService = TestBed.get(IconRegistryService);
    expect(service).toBeTruthy();
  });
});
