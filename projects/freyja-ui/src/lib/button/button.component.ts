// Angular imports
import { Component, Input, OnInit } from '@angular/core';

// Internal imports
import { IconBaseComponent } from '../shared/icon-base.component';
import { COLORS } from '../shared/constants';

/**
 * Freyja Button Component using Freyja Design specifics
 * it extends properties of icon base component
 */
let nextId = 0;

@Component({
  selector: 'fj-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends IconBaseComponent implements OnInit {

  /** Determin if button is ghost or not, and add relevant css classes */
  @Input() ghost = false;
  /**
   * Button type, it can be button, submit or reset
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  /**
   * Will determin look and feel of button
   */
  @Input() color: 'danger' | 'light' | 'primary' = 'primary';

  /**
   * Shape of button, it can be rounder, square or radius
   */
  @Input() shape: 'radius' | 'square' | 'rounded' = 'radius';

  /**
   * Provide unique to be used for button
   */
  @Input() id = `fj-button-${++nextId}`;


  // TODO: add generic generateClass methods

  constructor() {
    super();
  }

  /**
   * @description Perform operations which needs to be done after component is initialized
   */
  ngOnInit(): void {
    if (this.ghost) {
      this.iconFill = 'blue';
    }
  }
  /**
   * @description Add css classes based on inputs like size, shape etc
   */
  public generateClassList() {
    const baseCls = 'fj-button--';
    const classes = {
      [baseCls + this.color]: this.color,
      [baseCls + this.size]: this.size,
      [baseCls + this.shape]: this.shape,
      [baseCls + 'full-width']: this.fullWidth,
      [`${baseCls}icon-before`]: this.iconPosition === 'before',
      [`${baseCls}ghost`]: this.ghost
    };
    return classes;
  }
  /**
   * generate custom styles
   */
  public generateStyles() {
    return {...this.customStyles, margin: this.margin};
  }

  /**
   * function that it is triggered when the mouse pointer enters the button
   */
  onMouseEnter() {
    if (this.ghost) {
      this.iconFill = 'white';
    }
  }

  /**
   * function that it is triggered when the mouse pointer leaves the button
   */
  onMouseLeave() {
    if (this.ghost) {
      this.iconFill = 'blue';
    }
  }
}
