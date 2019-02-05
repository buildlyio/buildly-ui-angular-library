import { async, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';
import { FjButtonModule } from './button.module';


describe('Freyja Button', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FjButtonModule],
      declarations: [FjWrapperComponent],
    });

    TestBed.compileComponents();
  }));

  it('should apply class based on color attribute', () => {
    const fixture = TestBed.createComponent(FjWrapperComponent);

    const testComponent = fixture.debugElement.componentInstance;
    const buttonDebugElement = fixture.debugElement.query(By.css('button'));

    testComponent.btnColor = 'light';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('fj-button--light')).toBe(true);

    testComponent.btnColor = 'danger';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('fj-button--danger')).toBe(true);

  });


  it('should apply size based classes on size attribute', () => {
    const fixture = TestBed.createComponent(FjWrapperComponent);

    const testComponent = fixture.debugElement.componentInstance;
    const buttonDebugElement = fixture.debugElement.query(By.css('button'));

    testComponent.btnSize = 'micro';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('fj-button--micro')).toBe(true);

    testComponent.btnSize = 'small';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('fj-button--small')).toBe(true);

    testComponent.btnSize = 'medium';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('fj-button--medium')).toBe(true);

    testComponent.btnSize = 'large';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('fj-button--large')).toBe(true);

  });

  it('should apply shape based classes on shape attribute', () => {
    const fixture = TestBed.createComponent(FjWrapperComponent);

    const testComponent = fixture.debugElement.componentInstance;
    const buttonDebugElement = fixture.debugElement.query(By.css('button'));

    testComponent.btnShape = 'radius';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('fj-button--radius')).toBe(true);

    testComponent.btnShape = 'square';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('fj-button--square')).toBe(true);
  });


  describe('freyja button API tests', () => {
    it('should handle a click on the button', () => {
      const fixture = TestBed.createComponent(FjWrapperComponent);
      const testComponent = fixture.debugElement.componentInstance;
      const buttonDebugElement = fixture.debugElement.query(By.css('button'));

      buttonDebugElement.nativeElement.click();
      expect(testComponent.clickCount).toBe(1);
    });

    it('should not increment if disabled', () => {
      const fixture = TestBed.createComponent(FjWrapperComponent);
      const testComponent = fixture.debugElement.componentInstance;
      const buttonDebugElement = fixture.debugElement.query(By.css('button'));

      testComponent.isDisabled = true;
      fixture.detectChanges();
      buttonDebugElement.nativeElement.click();

      expect(testComponent.clickCount).toBe(0);
    });

    it('should disable the native button element', () => {
      const fixture = TestBed.createComponent(FjWrapperComponent);
      const buttonNativeElement = fixture.nativeElement.querySelector('button');
      expect(buttonNativeElement.disabled).toBeFalsy('Expected button not to be disabled');

      fixture.componentInstance.isDisabled = true;
      fixture.detectChanges();
      expect(buttonNativeElement.disabled).toBeTruthy('Expected button to be disabled');
    });

    it('should generate unique id for new instance', () => {
      const fixture = TestBed.createComponent(FjWrapperComponent);
      const firstBtn: ButtonComponent = fixture.debugElement.componentInstance.firstBtn;
      const secondBtn = fixture.debugElement.componentInstance.secondBtn;

      expect(firstBtn.id).not.toEqual(secondBtn.id);
    });

  });

});

/** Test component that contains an Freyj Button Component. */
@Component({
  selector: 'fj-wrapper-component',
  template: `
    <fj-button #firstBtn [tabIndex]="tabIndex" (click)="incrementClickCount()" [color]="btnColor"
      [size]="btnSize"
      [shape]="btnShape"
      [disabled]="isDisabled" >
      First Button
    </fj-button>
    <fj-button #secondBtn >
      First Button
  </fj-button>
  `
})
class FjWrapperComponent {
  clickCount = 0;
  isDisabled = false;
  tabIndex: number;
  btnColor = 'light';
  btnSize = 'med';
  btnShape = 'radius';

  @ViewChild('firstBtn') firstBtn: ButtonComponent;
  @ViewChild('secondBtn') secondBtn: ButtonComponent;

  incrementClickCount() {
    this.clickCount++;
  }
}
