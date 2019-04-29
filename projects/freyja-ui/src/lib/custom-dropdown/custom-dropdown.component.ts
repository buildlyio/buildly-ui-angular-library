import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import {FormGroup } from '@angular/forms';

import { BaseComponent } from '../shared/base.component';

/**
 * Count for next Id
 */
let nextId = 0;

@Component({
  selector: 'fj-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent extends BaseComponent implements AfterViewInit {
  /**
   * Dropdown options
   * Each option be an object with properties label and value
   * {label: string, value: number | string }
   */
  @Input() options = [];

  /**
   * whether dropdown panel is open or not
   */
  @Input() isOpen = false;

  /**
   * dropdown id
   */
  @Input() id = `fj-custom-dropdown-${++nextId}`;

  /**
   * dropdown with
   */
  @Input() width: string;

  /**
   *  Form group to which the control belongs to
   */
  @Input() formGroup: FormGroup;

  /**
   * Form control name for reactive forms
   */
  @Input() formControlName: string;

  /**
   * Error Message to be displayed
   */
  @Input() error: string;

  /**
   * To Apply forceful error state to input component
   */
  @Input() errored = false;

  /**
   * checks if the element should be focused by default
   */
  @Input() focused = false;

  /**
   * Size can be micro, small, medium or large
   */
  @Input() size: 'micro' | 'small' | 'medium' | 'large' = 'medium';

  /**
   * custom styles for dropdown
   */
  @Input() customStyles;

  /**
   * whether or not to show default value after selecting an option
   */
  @Input() showDefaultOnClick = false;

  @Input() clearable = false;

  /**
   * event that is triggered when an option is selected
   * called with value of dropdown
   */
  @Output() optionSelected: EventEmitter<any> = new EventEmitter();

  /**
   * Callback for value change
   */
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Callback for focus event
   */
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Callback for click event
   */
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  @Output() blur: EventEmitter<any> = new EventEmitter<any>();

  selectedOption: any = {};

  @ViewChild('headerInput') headerInput: ElementRef;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngAfterViewInit(): void {
    if (this.focused && this.headerInput) {
      this.headerInput.nativeElement.focus();
    }
  }

  @HostListener('document:click', ['$event', '$event.target'])
  handleClickOutside(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && this.isOpen) {
      this.isOpen = false; // close panel
    }
  }

  selectOption(option) {
    this.selectedOption = option;
    if (this.formGroup && this.formControlName) {
      this.formGroup.get(this.formControlName).setValue(option.value);
    }
    this.optionSelected.emit(option.value);
    this.closePanel();
    if (!this.error && !this.errored) {
      this.headerInput.nativeElement.focus();
    }

    if (this.showDefaultOnClick) {
      this.headerInput.nativeElement.value = this.options[0].label;
    }
  }

  onClick(event: Event) {
    this.headerInput.nativeElement.blur();
    this.isOpen = !this.isOpen;
    this.click.emit(event);
  }

  onFocus(event: Event) {
    this.focus.emit(event);
  }

  onBlur(event: Event) {
    this.blur.emit(event);
  }

  closePanel() {
    this.isOpen = false;
  }

  /**
   * @description Add css classes based on inputs like size, shape etc
   */
  public generateClassList() {
    const baseCls = 'fj-custom-dropdown--';
    const classes = {
      [baseCls + 'open']: this.isOpen,
      [baseCls + this.size]: this.size,
      [baseCls + 'required']: this.required,
      [baseCls + 'error']: this.errored || this.error,
    };
    return classes;
  }
}
