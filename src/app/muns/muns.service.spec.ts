import { TestBed } from '@angular/core/testing';

import { MunsService } from './muns.service';

describe('MunsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MunsService = TestBed.get(MunsService);
    expect(service).toBeTruthy();
  });
});
