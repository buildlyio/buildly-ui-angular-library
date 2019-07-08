import {
  Component, ContentChildren, EventEmitter, Input, OnChanges, OnInit, Output, QueryList,
  ViewChild
} from '@angular/core';
import {TableRowComponent} from './components/table-row/table-row.component';
import {TableEmitObject} from './table.model';
import { FixedRow } from './components/table-row/fixed-row.model';
import { MatSelect } from '@angular/material';
import { TableCustomColumnDirective } from './directives/table-custom-column.directive';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'fj-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends BaseComponent implements OnChanges {
  @Input() rows = [];
  @Input() columns = [];
  @Input() fixedRow: FixedRow;
  @Input() downloadSpinner;
  @Input() noHover = false;
  /**
   * message that appreas when there is no data available
   * @type {boolean}
   */
  @Input() noDataMessage = 'No Data Available';
  /**
   * virtual scrolling view port
   */
  @Input() viewPort: string;
  @Output() protected updateUsersRow = new EventEmitter();
  @Output() protected selectItem = new EventEmitter();
  @Output() protected submitTime = new EventEmitter();
  @Output() protected delete: EventEmitter<any> = new EventEmitter();
  @Output() protected activate: EventEmitter<any> = new EventEmitter();
  @Output() protected download: EventEmitter<any> = new EventEmitter();
  @Output() protected dataFiltered: EventEmitter<any> = new EventEmitter();
  @Output() selectionChanged = new EventEmitter(); // event when an item is selected from select template (dropdown)
  @Output() fixedRowSelectionChanged = new EventEmitter(); // event when an item is selected from dropdown of the fixed row
  @Output() switcherChanged = new EventEmitter(); // event when the value of the switcher is changed

  @ViewChild('tableRow') tableRow: TableRowComponent;
  @ViewChild('fixedRowSelectField') fixedRowSelectField: MatSelect;

  private _customColumns = null;

  /**
   * Column templates gathered from `ContentChildren`
   * if described in your markup.
   */
  @ContentChildren(TableCustomColumnDirective)
  set customColumns(val: QueryList<TableCustomColumnDirective>) {
    this._customColumns = val;
    this.appendCustomColumns(this._customColumns);
    console.log('setter called');
  }

  public sort; // applied sort for the column
  public filters; // applied filters from the column filter box;

  constructor() {
    super();
  }

  ngOnChanges() {
    this.defineFilterOptions();
    this.customColumns = this._customColumns;
    console.log('on changes called');
  }

  /**
   * append custom columns to columns array
   * @param customColumns - custom columns added by the user
   */
  appendCustomColumns(customColumns: any) {
    if (customColumns) {
      const customColumnsArr = customColumns.toArray();
      customColumnsArr.forEach(customColumn => {
        customColumn.cellTemplate = 'custom';
        this.columns.splice(customColumn.index, 0 , customColumn);
      });
    }
  }

  /**
   * defines the filter options of each column
   */
  defineFilterOptions() {
    if (this.rows.length) {
      this.columns.forEach( column => {
        if (column.filtering && !column.filterOptions) {
          column.filterOptions = this.rows.map( row => {
            return {label: row[column.prop], value: row[column.prop], prop: column.prop };
          });
        }
      });
    }
  }

  updateUsers(usersRow) {
    this.updateUsersRow.emit(usersRow);
  }

  selectRow(item) {
    this.selectItem.emit(item);
  }

  timeSubmitted(item) {
    this.submitTime.emit(item);
  }

  applyFilters(filterValues) {
    this.filters = filterValues;
  }

  getFilteredRows(filteredRows) {
    this.dataFiltered.emit(filteredRows);
  }

  deleteEvent(item: TableEmitObject) {
    this.delete.emit(item);
  }

  activateEvent(elem: any) {
    this.activate.emit(elem.item);
  }

  downloadEvent(item: TableEmitObject) {
    this.download.emit(item);
  }

  stopDownloadSpinner(index: number) {
    this.tableRow.stopDownloadSpinner(index);
  }
  applySort(sortValue) {
    this.sort = sortValue;
  }

  /**
   * called when the value of the dropdown changes
   * @param value
   */
  onSelectionChanged(value) {
    this.selectionChanged.emit(value);
  }

  /**
   * called when the value of the switcher changes
   * @param value
   */
  onSwitcherChanged(value) {
    this.switcherChanged.emit(value);
  }

  /**
   * called when the value of the fixed row dropdown changes
   * @param value
   */
  onFixedRowSelectionChanged(value) {
    this.fixedRowSelectField.value = this.fixedRow.label;
    this.fixedRowSelectionChanged.emit(value);
  }

  /**
   * Add css classes based on inputs like size, shape etc
   */
  public generateClassList() {
    const classes = {
      ['fj-table--' + this.theme]: this.theme
    };
    return classes;
  }
}
