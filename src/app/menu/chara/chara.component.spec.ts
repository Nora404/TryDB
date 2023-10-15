import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaComponent } from './chara.component';

describe('CharaComponent', () => {
  let component: CharaComponent;
  let fixture: ComponentFixture<CharaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CharaComponent]
    });
    fixture = TestBed.createComponent(CharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
