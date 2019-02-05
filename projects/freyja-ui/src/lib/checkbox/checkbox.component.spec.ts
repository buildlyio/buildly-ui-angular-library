import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Freyja Check Box', () => {
  let component: FjWrapperComponent;
  let fixture: ComponentFixture<FjWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent, FjWrapperComponent]
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

  it('should handle a click on the checkbox', () => {
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

/** Wrapper Component to Test Freyja CheckBox */

@Component({
  selector: 'fj-wrapper-compoennt',
  template: `
  <fj-checkbox
    [checked]="checkedValue"
    [labelPosition]="labelPosition"
    [disabled]="isDisabled"
    (change)="onCheckClicked($event)"
  >Checked</fj-checkbox>
  `
})
class FjWrapperComponent {
  labelPosition = 'before';
  clickCount = 0;
  isDisabled = false;
  checkedValue = false;

  @ViewChild(CheckboxComponent) checkboxComponent: CheckboxComponent;

  onCheckClicked(val: boolean) {
    this.checkedValue = val;
  }
}
