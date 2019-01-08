import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: DemoTextInputComponent;
  let fixture: ComponentFixture<DemoTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
