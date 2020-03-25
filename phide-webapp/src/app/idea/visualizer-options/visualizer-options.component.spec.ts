import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerOptionsComponent } from './visualizer-options.component';

describe('VisualizerOptionsComponent', () => {
  let component: VisualizerOptionsComponent;
  let fixture: ComponentFixture<VisualizerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
