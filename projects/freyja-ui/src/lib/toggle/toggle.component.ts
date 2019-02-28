import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@libs/freyja-ui/src/lib/shared/base.component';

@Component({
  selector: 'fj-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {}

  /**
   * Add css classes based on inputs like size, shape etc
   */
  public generateClassList() {
    const baseCls = 'fj-toggle-switch--';
    const classes = {
      [baseCls + this.size]: this.size,
    };
    return classes;
  }
}
