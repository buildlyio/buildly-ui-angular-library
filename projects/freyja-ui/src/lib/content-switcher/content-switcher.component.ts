import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@libs/freyja-ui/src/lib/shared/base.component';

@Component({
  selector: 'fj-content-switcher',
  templateUrl: './content-switcher.component.html',
  styleUrls: ['./content-switcher.component.scss']
})
export class ContentSwitcherComponent extends BaseComponent implements OnChanges {

  /**
   * content switcher options
   */
  @Input() options = [];
  /**
   * indicate if the content switcher is disabled
   */
  @Input() disabled: boolean;
  /**
   * the selected value of the content switcher
   */
  @Input() selectedOption;
  /**
   * event triggered when an option is selected
   */
  @Output() optionSelected: EventEmitter<any> = new EventEmitter();

  /**
   * the id of the active tab
   */
  public activeTab = 0;

  constructor() {
    super();
  }

  ngOnChanges() {
    if (this.selectedOption) {
      this.activeTab = this.options.findIndex(option => this.selectedOption.toString() === option.value.toString());
    }
  }
  /**
   *
   * @param index - index of the selected element
   * @param value - value of the selected element
   */
  selectOption(index: number, value: number) {
    this.activeTab = index;
    const selectedElement = {
      index,
      value
    };
    this.optionSelected.emit(selectedElement);
  }
  /**
   * Generate classes using BEM appraoch and bind to ngClass
   */
  public generateClassList(i: number) {
    const baseCls = `content-switcher__tab--`;
    const classes = {
      [`${baseCls}is-active`]: this.activeTab === i && !this.disabled,
      [`${baseCls}--disabled`]: this.disabled,
      [`${baseCls}${this.theme}`]: this.theme,
    };
    return classes;
  }
}

