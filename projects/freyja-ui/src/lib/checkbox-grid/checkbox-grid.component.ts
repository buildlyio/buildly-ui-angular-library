import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fj-checkbox-grid',
  templateUrl: './checkbox-grid.component.html',
  styleUrls: ['./checkbox-grid.component.scss']
})
export class CheckboxGridComponent implements OnChanges {

  @Input() title: string;
  @Input() checkboxGroup: any[];
  @Input() inline = true;
  @Input() noPadding = false;
  @Input() noMargin = false;
  @Input() smallText = false;
  @Input() noBorder: boolean;
  @Input() formGroup: FormGroup;
  @Output() checkboxClicked = new EventEmitter();

  /**
   * @description Internally used checkbox data
   */
  public checkboxes: any[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.makeCheckboxes();
  }

  /**
   * @description Create the internally used array of checkboxes
   */
  private makeCheckboxes(): void {
    if (this.checkboxGroup) {
      this.checkboxes = this.checkboxGroup.map((item, index) => {
        return {
          index: index,
          id: `${item.value}_${index}`,
          label: item.label,
          value: item.value,
          checked: item.checked || false,
        };
      });
    }
  }

  /**
   * @description Notify the parent that a value has changed
   * @param checked the new checked value of the checkbox
   * @param item the internal checkbox model
   */
  public updateChecked(checked, item): void {
    if (item.disabled) {
      return;
    }
    item.checked = checked;
    const toggledItem = this.checkboxGroup[item.index];
    if (toggledItem.hasOwnProperty('checked')) {
      toggledItem.checked = item.checked;
    }
    this.checkboxClicked.emit(toggledItem);
  }
}
