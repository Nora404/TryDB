import { TestBed } from '@angular/core/testing';

import { KeyboardEventService } from './keyboard-event.service';

describe('KeyboardEventService', () => {
  let service: KeyboardEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
