import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: DemoNumberInputComponent;
  let fixture: ComponentFixture<DemoNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
