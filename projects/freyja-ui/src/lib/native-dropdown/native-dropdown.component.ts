import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseComponent } from '../shared/base.component';

/**
 * Count for next id
 */
let nextId = 0;

@Component({
  selector: 'fj-native-dropdown',
  templateUrl: './native-dropdown.component.html',
  styleUrls: ['./native-dropdown.component.scss']
})
export class NativeDropdownComponent extends BaseComponent implements AfterViewInit, OnChanges {
  /**
   * Dropdown options
   * Each option be an object with properties label and value
   * {label: string, value: number | string }
   */
  @Input() options = [];

  /**
   * dropdown id
   */
  @Input() id = `fj-native-dropdown-${++nextId}`;

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

  constructor() {
    super();
  }

  ngOnChanges() {
    const dropdownElement = document.getElementById(this.id);
    if (this.focused && dropdownElement) {
      dropdownElement.focus();
    }
  }

  ngAfterViewInit(): void {
    const dropdownElement = document.getElementById(this.id);
    if (this.focused && dropdownElement) {
      dropdownElement.focus();
    }
  }

  onOptionSelected(event: Event) {
    event.stopPropagation();
    const dropdownElement: any = document.getElementById(this.id);
    this.optionSelected.emit(dropdownElement.value);

    if (this.showDefaultOnClick) {
      dropdownElement.value = this.options[0].label;
    }
  }

  /**
   * triggers click event
   * @param event HTML click event
   */
  onClick(event: Event) {
    event.stopPropagation();
    this.click.emit(event);
  }

  /**
   * triggers focus event
   * @param event HTML focus event
   */
  onFocus(event: Event) {
    this.focus.emit(event);
  }

  /**
   * @description Add css classes based on inputs like size, shape etc
   */
  public generateClassList() {
    const baseCls = 'fj-native-dropdown--';
    const classes = {
      [baseCls + this.theme]: this.theme,
      [baseCls + this.size]: this.size,
      [baseCls + 'required']: this.required,
      [baseCls + 'error']: this.errored || this.error,
      [baseCls + 'full-width']: this.fullWidth
    };
    return classes;
  }
}
