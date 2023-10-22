import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEditorComponent } from './map-editor.component';

describe('MapEditorComponent', () => {
  let component: MapEditorComponent;
  let fixture: ComponentFixture<MapEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MapEditorComponent]
    });
    fixture = TestBed.createComponent(MapEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
