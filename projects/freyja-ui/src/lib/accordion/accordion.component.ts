// Angular Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Internal Imports
import { BaseComponent } from '../shared/base.component';


/**
 * Counter for Next Id
 */
let nextId = 0;

/**
 * Freyja Accordion Component according to specifics of Freyja Design
 */
@Component({
  selector: 'fj-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent extends BaseComponent {


  // This is to make component open state controlled
  private isOpen = false;

  /**
   * Provide unique ID or it will use auto generated from counter
   */
  @Input() id = `fj-accordion-${++nextId}`;

  /**
   * Will determine if acordion is expanded or not
   */
  @Input()
  get open(): boolean {
    return this.isOpen;
  }
  set open(val: boolean) {
    if (val !== this.isOpen) {
      this.isOpen = this.coerceBooleanInput(val);
    }
  }

  /**
   * Will emit if open state get's changed on click
   */
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() {
    super();
  }

  /**
   * Will toggle open state and emit on Change event
   * @param evt HTML Click Event
   */
  toggleState(evt): void {
    evt.stopPropagation();
    this.open = !this.open;
    this.change.emit(this.open);  }

  /**
   * Generate classes using BEM appraoch and bind to ngClass
   */
  public generateClassList() {
    const base = 'fj-accordion--';
    const classes = {
      [`${base}open`]: this.open,
      [`${base}disabled`]: this.disabled,
      [`${base}label-after`]: this.labelPosition === 'after'
    };
    return classes;
  }
}
