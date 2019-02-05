import { Component, EventEmitter, Input, Output } from '@angular/core';
import {BaseComponent} from '../shared/base.component';
import {FormGroup} from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'fj-native-dropdown',
  templateUrl: './native-dropdown.component.html',
  styleUrls: ['./native-dropdown.component.scss']
})
export class NativeDropdownComponent extends BaseComponent {
  /**
   * options of the dropdown
   */
  @Input() options = [];
  /**
   * dropdown id
   */
  @Input() id = `fj-native-dd-${++nextId}`;
  /**
   * dropdown width
   */
  @Input() width: string;
  /**
   * wether or not to show default value after selecting an option
   */
  @Input() showDefaultOnCLick = false;
  /**
   * event that is triggered when an option is selected
   */
  @Output() optionSelected: EventEmitter<any> = new EventEmitter();
  /**
   * Error Message to be displayed
   */
  @Input() error: string;
  /**
   * reactive form control name
   */
  @Input() controlName: string;
  /**
   * reactive form group
   */
  @Input() formGroup: FormGroup;

  constructor() {
    super();
  }

  /**
   * function triggered when an option is selected
   * @param evt - mouse click event
   */
  onOptionSelected(evt) {
    evt.stopPropagation();
    const dropdownElem: any = document.getElementById(this.id);
    this.optionSelected.emit(dropdownElem.value);
    if (this.showDefaultOnCLick) {
      // reselect default value
      dropdownElem.value = this.options[0].label;
    }
  }

  /**
   * @param evt - mouse click event
   */
  onDropdownClicked(evt) {
    evt.stopPropagation();
  }

}
