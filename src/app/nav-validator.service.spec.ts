import { TestBed } from '@angular/core/testing';

import { NavValidatorService } from './nav-validator.service';

describe('NavValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavValidatorService = TestBed.get(NavValidatorService);
    expect(service).toBeTruthy();
  });
});
