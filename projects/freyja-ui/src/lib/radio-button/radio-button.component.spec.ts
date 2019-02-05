import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComponent } from './radio-button.component';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Freyja Radio Button', () => {
  let component: FjWrapperComponent;
  let fixture: ComponentFixture<FjWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonComponent, FjWrapperComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle a click on the radio button', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const checkboxDebugElement = fixture.debugElement.query(By.css('input'));
    checkboxDebugElement.nativeElement.click();
    expect(testComponent.checkedValue).toBe(true);
  });

  it('value should not change if disabled', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const checkboxDebugElement = fixture.debugElement.query(By.css('input'));

    testComponent.isDisabled = true;
    fixture.detectChanges();

    checkboxDebugElement.nativeElement.click();

    expect(testComponent.checkedValue).toBe(false);
  });
});

/** Wrapper Component to Test Freyja Radio Button */

@Component({
  selector: 'fj-wrapper-compoennt',
  template: `
  <fj-radio-button
    [checked]="checkedValue"
    [labelPosition]="labelPosition"
    [disabled]="isDisabled"
    (change)="onRadioChange($event)"
  >Checked</fj-radio-button>
  `
})
class FjWrapperComponent {
  labelPosition = 'before';
  clickCount = 0;
  isDisabled = false;
  checkedValue = false;

  @ViewChild(RadioButtonComponent) radioButtonComponent: RadioButtonComponent;

  onRadioChange(val: boolean) {
    this.checkedValue = val;
  }
}
