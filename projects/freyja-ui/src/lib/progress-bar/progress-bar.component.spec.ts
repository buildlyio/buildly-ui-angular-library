import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    component.plannedValue = 1000;
    component.currentValue = 200;
    component.dangerColor = '#FFBE36';
    component.progressColor = '#FFBE36';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the percentage', () => {
    expect(component.calculatePercentage()).toBe(20);
  });

  it('should define the color and the percentage string', () => {
    component.ngOnInit();
    expect(component.percentage).toBe('20%');
    expect(component.color).toBe(component.progressColor);
  });

  it('should define the color as danger if the percentage is > 100', () => {
    component.currentValue = 1000;
    component.plannedValue = 1200;
    component.ngOnInit();
    expect(component.color).toBe(component.dangerColor);
  });
});
