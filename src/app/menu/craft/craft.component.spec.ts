import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftComponent } from './craft.component';

describe('CraftComponent', () => {
  let component: CraftComponent;
  let fixture: ComponentFixture<CraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CraftComponent]
    });
    fixture = TestBed.createComponent(CraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
