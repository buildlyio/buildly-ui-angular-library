import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fj-content-switcher',
  templateUrl: './content-switcher.component.html',
  styleUrls: ['./content-switcher.component.scss']
})
export class ContentSwitcherComponent implements OnInit{

  /**
   * content switcher options
   */
  @Input() options = [];
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

  ngOnInit() {
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
}
