import { TestBed } from '@angular/core/testing';

import { UserDBService } from './userDB.service';

describe('DbService', () => {
  let service: UserDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
