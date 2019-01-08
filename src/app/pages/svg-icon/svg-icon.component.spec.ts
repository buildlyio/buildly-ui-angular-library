import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSvgIconComponent } from './svg-icon.component';

describe('SvgIconComponent', () => {
  let component: DemoSvgIconComponent;
  let fixture: ComponentFixture<DemoSvgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSvgIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
