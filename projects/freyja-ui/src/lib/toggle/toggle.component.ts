import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'fj-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent extends BaseComponent implements OnInit {

  /**
   * wether the toggle is checked or not by default
   */
  @Input() checked;
  /**
   * value of the toggle
   */
  @Input() value: string;

  /**
   * an event that is fired when the toggle is clicked
   * @type {EventEmitter<any>}
   */
  @Output() toggleClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit() {}

  /**
   * emit the toggleClicked event with the checked status of the toggle
   */
  onToggleClicked() {
    this.checked = !this.checked;
    this.toggleClicked.emit(this.checked);
  }

  /**
   * Add css classes based on inputs like size, shape etc
   */
  public generateClassList() {
    const baseCls = 'fj-toggle-switch--';
    const classes = {
      [baseCls + this.theme]: this.theme,
      [baseCls + this.size]: this.size,
    };
    return classes;
  }
}
