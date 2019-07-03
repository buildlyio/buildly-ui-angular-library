import {Component, Input} from '@angular/core';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'fj-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends BaseComponent {
  @Input() noMargin: false;
  constructor() {
    super();
  }
  /**
   * Add css classes based on inputs like size, shape etc
   */
  public generateClassList() {
    const baseCls = 'fj-card--';
    const classes = {
      [baseCls + this.theme]: this.theme,
    };
    return classes;
  }
}
