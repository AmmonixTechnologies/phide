import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionVisualizerComponent } from './dimension-visualizer.component';

describe('DimensionVisualizerComponent', () => {
  let component: DimensionVisualizerComponent;
  let fixture: ComponentFixture<DimensionVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
