import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygoundComponent } from './playgound.component';

describe('PlaygoundComponent', () => {
  let component: PlaygoundComponent;
  let fixture: ComponentFixture<PlaygoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaygoundComponent]
    });
    fixture = TestBed.createComponent(PlaygoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
