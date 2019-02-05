import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Freyja Check Box', () => {
  let component: FjWrapperComponent;
  let fixture: ComponentFixture<FjWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberInputComponent, FjWrapperComponent]
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

  it('should handle a value change', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const numberinputDebugElement = fixture.debugElement.query(By.css('input'));
    numberinputDebugElement.nativeElement.click();
  });

  it('should set placeholder into input', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const numberinputDebugElement = fixture.debugElement.query(By.css('input'));

    testComponent.placeholder = 'This is nice placeholder';
    fixture.detectChanges();
  });

  it('should set placeholder into input', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const numberinputDebugElement = fixture.debugElement.query(By.css('input'));

    testComponent.placeholder = 'This is nice placeholder';
    fixture.detectChanges();
  });
  it('should set label around input', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const numberinputDebugElement = fixture.debugElement.query(By.css('input'));

    testComponent.label = 'This is label';
    fixture.detectChanges();
  });
  it('should generate error indication based on value state', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const numberinputDebugElement = fixture.debugElement.query(By.css('input'));

    testComponent.isErrored = true;
    fixture.detectChanges();
  });

  it('should not be able to change value if disabled', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const numberinputDebugElement = fixture.debugElement.query(By.css('input'));

    testComponent.isDisabled = true;
    fixture.detectChanges();
  });
});

/** Wrapper Component to Test Freyja CheckBox */

@Component({
  selector: 'fj-wrapper-compoennt',
  template: `
  <fj-number-input
    [disabled]="isDisabled"
  >Checked</fj-number-input>
  `
})
class FjWrapperComponent {
  isDisabled = false;

  @ViewChild(NumberInputComponent) numberInputComponent: NumberInputComponent;
}
