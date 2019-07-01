// Angular Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Internal Imports
import { BaseComponent } from '../shared/base.component';

/**
 * Count for Next Id
 */
let nextId = 0;

/**
 * Freyja CheckBox Component according to specifics of Freyja Design
 */
@Component({
  selector: 'fj-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseComponent {

  // This is to make component controlled
  private checkedVal = false;
  private indeterminateVal = false;

  /**
   * Provide unique ID or it will use auto generated from counter
   */
  @Input() id = `fj-checkbox-${++nextId}`;
  /**
   * the checkbox value
   */
  @Input() value: string;
  /**
   * Error Message to be displayed
   */
  @Input() error: string;
  /**
   * will determine indeterminate state of checkbox
   */
  @Input()
  get indeterminate(): boolean {
    return this.indeterminateVal;
  }
  set indeterminate(val: boolean) {
    this.indeterminateVal = this.coerceBooleanInput(val);
  }

  /**
   * on change event, will be emitted once user clicks on checkbox to change value
   */
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  /**
   * Will determin initial checked state of checkbox
   */
  @Input()
  get checked(): boolean {
    return this.checkedVal;
  }
  set checked(v: boolean) {
    if (v !== this.checkedVal) {
      this.checkedVal = this.coerceBooleanInput(v);
    }
  }

  constructor() {
    super();
  }
  /**
   * capture on click and toggle state of checkbox
   * @param event emitted by html element on click
   */
  onCheckboxClicked(event: Event) {
    event.stopPropagation();
    this.toggle();
  }

  /**
   * stop event propagation by capturing it
   * @param event html event
   */
  onChangeEvent(event: Event) {
    event.stopPropagation();
  }

  /**
   * Generate classes using BEM appraoch and bind to ngClass
   */
  public generateClassList() {
    let baseCls;
    this.theme ? baseCls = `fj-checkbox--${this.theme}` : baseCls = `fj-checkbox--`;
    const classes = {
      [`${baseCls}label-before`]: this.labelPosition === 'before',
      [`${baseCls}disabled`]: this.disabled,
      [`${baseCls}indeterminate`]: this.indeterminate
    };
    return classes;
  }

  /**
   * Toggle state of checked value and emit on change
   */
  public toggle() {
    this.checked = !this.checked;
    this.change.emit(this.checkedVal);
  }
}
