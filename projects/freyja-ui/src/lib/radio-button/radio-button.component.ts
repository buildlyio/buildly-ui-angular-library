// Angular Imports
import { Component, Input, EventEmitter, Output } from '@angular/core';

// Internal Imports
import { BaseComponent } from '../shared/base.component';

/**
 * Count for Next Id
 */
let nextId = 0;


/**
 * Freyja Radio Button Component according to specifics of Freyja of Freyja Design
 */
@Component({
  selector: 'fj-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent extends BaseComponent {

  // This is to make component controlled
  private checkedValue = false;
  private uniqueInputId = `fj-radio-button-${++nextId}`;

  /**
   * Provide unique ID or it will use auto generated from counter
   */
  @Input() id = `fj-radio-button-${++nextId}`;

  /**
   * Value to be attached to radio button
   */
  @Input() value: any;
  /**
   * Error Message to be displayed
   */
  @Input() error: string;


  /**
   * on change event, will be emitted once user clicks on radio button to change value
   */
  @Output() change: EventEmitter<any> = new EventEmitter();

  /**
   * Will determin initial checked state of radio button
   */
  @Input()
  get checked(): boolean {
    return this.checkedValue;
  }
  set checked(v: boolean) {
    if (v !== this.checkedValue) {
      this.checkedValue = this.coerceBooleanInput(v);
      this.change.emit(this.checkedValue);
    }
  }

  constructor() {
    super();
  }

  /**
   * Generate classes using BEM appraoch and bind to ngClass
   */
  public generateClassList() {
    const base = 'fj-radio-btn--';
    const classes = {
      [`${base}label-before`]: this.labelPosition === 'before',
      [`${base}disabled`]: this.disabled
    };
    return classes;
  }

  /**
   * capture on click and toggle state of radio button
   * @param event emitted by html element on click
   */
  onRadioButtonClicked(event: Event) {
    event.stopPropagation();
    this.toggle();
  }

  onChangeEvent(event: Event) {
    event.stopPropagation();
  }

  /**
   * Toggle state of checked value and emit on change
   */
  public toggle() {
    this.checked = !this.checked;
    this.change.emit(this.checkedValue);
  }
}
