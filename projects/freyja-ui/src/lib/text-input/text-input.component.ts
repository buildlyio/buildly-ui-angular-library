// Angular Imports
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

// Internal Imports
import { BaseComponent } from '../shared/base.component';

/**
 * Count for Next Id
 */
let nextId = 0;

/**
 * Freyja Text Input Component according to specifics of Freyja Design
 */
@Component({
  selector: 'fj-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent extends BaseComponent implements OnChanges {

  /**
   * Represent Internal state of component
   */
  private isErrored = false;

  // This is to make component controlled
  private inputValue = '';

  /**
   * Unique ID for HTMl Element identifier
   */
  @Input() id = `fj-text-input-${++nextId}`;

  /**
   * custom styles object for the input
   */
  @Input() customStyles;

  /**
   * Input value to be displayed
   */
  @Input() value: string;

  /**
   * type of the input, default type is text
   */
  @Input() type = 'text';

  /**
   * To Apply forceful error state to input component
   */
  @Input() errored = false;

  /**
   * checkes if the element should be focused by default
   */
  @Input() focused = false;
  /**
   * Error Message to be displayed
   */
  @Input() error: string;
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
  /**
   * Callback for mouseout event
   */
  @Output() mouseout: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }


  ngOnChanges() {
    if (this.focused) {
      document.getElementById(this.id).focus();
    }
  }

  /**
    * Capture value change ang emit on change event callback
    * @param event HTML onChange Event
    */
  onValueChange(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.inputValue = (<HTMLInputElement>event.target).value;
    this.change.emit(this.inputValue);
  }

  /**
   * triggers on focus event
   * @param event HTML onFocus Event
   */
  onFocus(event: Event) {
    event.stopPropagation();
    this.focus.emit(this.inputValue);
  }

  /**
   * triggers on click event
   * @param event HTML click Event
   */
  onClick(event: Event) {
    event.stopPropagation();
    this.click.emit(this.inputValue);
  }

  /**
   * Capture value change ang emit on mouseout event callback
   * @param event HTML onChange Event
   */
  onMouseOut(event: Event) {
    event.stopPropagation();
    this.inputValue = (<HTMLInputElement>event.target).value;
    this.mouseout.emit(this.inputValue);
  }

  /**
   * Generate classes using BEM appraoch and bind to ngClass
   */
  public generateClassList() {
    const classes = {
      ['fj-input--full-width']: this.fullWidth,
      ['fj-input--' + this.size]: this.size,
      ['fj-input--required']: this.required,
      ['fj-input--error']: this.errored || this.error,
    };
    return classes;
  }

}
