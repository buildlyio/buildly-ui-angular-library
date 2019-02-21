// Angular Imports
import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

// Internal Imports
import { BaseComponent} from '../shared/base.component';

/**
 * Count for Next Id
 */
let nextId = 0;


/**
 * Freyja Number Input Component according to specifics of Freyja Design
 */
@Component({
  selector: 'fj-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NumberInputComponent extends BaseComponent {

  // This is to make component controlled
  private inputValue = '';

  /**
   * Provide unique ID or it will use auto generated from counter
   */
  @Input() id = `fj-number-input-${++nextId}`;

  /**
   * Provide value to be displayed in input
   */
  @Input() value: string;

  /**
   * Allow applying forceful error state of input
   */
  @Input() errored = false;

  /**
   * On change event hook, which will be emitted on value change
   */
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
   }

   /**
    * Capture value change ang emit on change event callback
    * @param event HTML onChange Event
    */
  onValueChange(event: Event) {
    event.stopPropagation();
    this.inputValue = (<HTMLInputElement>event.target).value;
    this.change.emit(this.inputValue);
  }


  /**
   * Generate classes using BEM appraoch and bind to ngClass
   */
  public generateClassList() {
    const classes = {
      ['fj-input--' + this.size]: this.size,
      ['fj-input--error']: this.errored,
    };
    return classes;
  }

}
