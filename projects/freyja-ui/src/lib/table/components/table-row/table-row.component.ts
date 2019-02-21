import { Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
} from '@angular/core';
import { FixedRow } from './fixed-row.model';
@Component({
  selector: 'fj-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnChanges {
  @Input() rows = [];
  @Input() columns = [];
  @Input() downloadSpinner;
  @Input() filters; // selected filters
  @Input() sort; // activated sort
  @Input() noHover: boolean;
  @Output() protected updateUsersRow = new EventEmitter();
  @Output() protected submitTime = new EventEmitter();
  @Output() protected selectItem = new EventEmitter();
  @Output() protected delete: EventEmitter<any> = new EventEmitter();
  @Output() protected download: EventEmitter<any> = new EventEmitter();
  @Output() protected rowsFiltered: EventEmitter<any> = new EventEmitter();
  @Output() protected activate: EventEmitter<any> = new EventEmitter();
  @Output() selectionChanged = new EventEmitter(); // event when an item is selected from select template (dropdown)
  @Output() fixedRowSelectionChanged = new EventEmitter(); // event when an item is selected from dropdown of the fixed row
  @Output() switcherChanged = new EventEmitter(); // event when the value of the switcher is changed
  @ViewChild('fixedRowSelectField') fixedRowSelectField;

  public isOpened: boolean;

  public filteredRows = []; // filterd table rows

  constructor() {}

  ngOnChanges() {
    this.filteredRows = this.applyFilters(this.rows, this.filters);
    this.rowsFiltered.emit(this.filteredRows);
  }

  isNumber(value) {
    return typeof value === 'number';
  }
  updateUsers($event, column, row) {
    const updatedUserRow = {
      value: $event,
      prop: column.prop,
      rowId: row.id
    };
    this.updateUsersRow.emit(updatedUserRow);
  }

  /**
   * @description called when the whole row is clicked
   * @param item - the whole row object
   */
  selectRow(item) {
    this.selectItem.emit(item);
  }

  /**
   * @description called when time input was submited
   * @param item - the whole row object
   */
  timeSubmitted(item) {
    this.submitTime.emit(item);
  }

  /**
   * @description called when the delete action button was clicked
   * @param item - the whole row object
   * @param index - the index of the row
   */
  deleteEvent(item, index) {
    this.delete.emit({item, index});
  }


  /**
   * called when the download action button was clicked
   * @param item - the whole row object
   * @param index - the index of the row
   */
  downloadEvent(item, index) {
    this.rows[index].showSpinner = true;
    this.download.emit({item, index});
  }

  /**
   * called when the download action button was clicked
   * @param evt - mouse click event
   * @param item - the whole row object
   * @param index - the index of the row
   */
  activateEvent(evt, item, index) {
    evt.stopPropagation();
    this.activate.emit({item, index});
  }

  /**
   * @description called when the value of the dropdown changes
   * @param value
   */
  onSelectionChanged(value) {
    this.selectionChanged.emit(value);
  }

  /**
   * @description called when the value of the switcher changes
   * @param value - swticher selected value
   * @param row - current table row
   */
  onSwitcherChanged(value, row) {
    const valueToEmit = {
      selectedItem: value,
      row
    }
    this.switcherChanged.emit(valueToEmit);
  }

  /**
   * @description called when the value of the fixed row dropdown changes
   * @param value
   */
  onFixedRowSelectionChanged(value, defaultValue) {
    this.fixedRowSelectionChanged.emit(value);
    this.fixedRowSelectField.value = defaultValue;
  }

  /**
   * @description called from the parent, hides the running download spinner
   * @param index - index of the row
   */
  stopDownloadSpinner(index) {
    this.rows[index].showSpinner = false;
  }

  applyFilters(items, filter) {
    if (filter) {
      return items.filter(item => {
        const notMatchingField = Object.keys(filter).find(key => {
          const filterArr = filter[key].split(',');
          if (typeof item[key] === 'object') {
            return !item[key].find( itemElem => {
              return filterArr.includes(itemElem);
            });
          } else {
            return !filterArr.includes(item[key]);
          }
        });
        return !notMatchingField; // true if matches all fields
      });
    } else {
      return items;
    }
  }
}
