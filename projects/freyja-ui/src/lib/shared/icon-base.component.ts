// Angular Imports
import { Input } from '@angular/core';

// Internal Imports
import { COLORS } from './constants';
import { BaseComponent } from './base.component';

/**
 * Base Icon component it will be used in Icon Component and Button Component
 */
export class IconBaseComponent extends BaseComponent {
  /**
   * Icon input represents name of icon, it can be svg icon
   */
  @Input() icon: string;
  /**
   * Icon Margin from from it's parent
   */
  @Input() iconMargin: string;
  /**
   * Fill Color of icon, you can customize it as per your needs
   */
  @Input() iconFill = 'white';
  /**
   * When used in conjuction with label or anyother content, position of icon
   */
  @Input() iconPosition: 'after' | 'before' = 'before';
}
