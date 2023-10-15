import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestComponent } from './quest.component';

describe('QuestComponent', () => {
  let component: QuestComponent;
  let fixture: ComponentFixture<QuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestComponent]
    });
    fixture = TestBed.createComponent(QuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
