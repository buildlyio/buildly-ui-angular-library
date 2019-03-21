// Angular Imports
import { Input } from '@angular/core';

/**
 * @description Common set of inputs and methods to be used in all Freyja Components
 */
export class BaseComponent {
  public _disabled = false;
  public _required = false;

  /**
   * custom styles object for the button
   */
  @Input() customStyles;
  /**
   * Name input, commonly used to identify form value
   */
  @Input() name: string;

  /**
   * Custom Margin for component
   */
  @Input() margin: string;
  /**
   * If component will be disabled, setter/getter to support approach like below
   * <fj-comp disabled></fj-comp>
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(v: boolean) {
    this._disabled = this.coerceBooleanInput(v);
  }

    /**
   * If component will be required, setter/getter to support approach like below
   * <fj-comp required></fj-comp>
   */
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(v: boolean) {
    this._required = this.coerceBooleanInput(v);
  }
  /**
   * If component will take full width of it's container
   */
  @Input() fullWidth = false;

  /**
   * label to be used in text input etc
   */
  @Input() label: string;

  /**
   * label position, if it will appear before or after content
   */
  @Input() labelPosition: 'before' | 'after' = 'after';

    /**
   * Size can be micro, small, medium or large
   */
  @Input() size: 'micro' | 'small' | 'medium' | 'large' = 'medium';

  /**
   * Placeholder for HTML input elements
   */
  @Input() placeholder = '';

  /**
   * TabIndex of the component
   */
  @Input() tabIndex: number;

  /**
   * aria-label attribute of the host element
   */
  @Input('aria-label') ariaLabel: string;

  /**
   * aria-labelledby attribute for element, usually used in input element
   */

  @Input('aria-labelledby') ariaLabelledby: string;

  /**
   * Input attribute for Accessibility
   */
  @Input('aria-describedby') ariaDescribedby: string;



  public style: object | string;
  public class: string;

  /**
   * @description coerce an inout value into boolean
   * @param val an input value which will be coearced into a boolean value
   */
  coerceBooleanInput(val: any): boolean {
    return !!val || val === '';
  }
}
