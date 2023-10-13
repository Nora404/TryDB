import { TestBed } from '@angular/core/testing';

import { BiomService } from './biom.service';

describe('BiomService', () => {
  let service: BiomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
