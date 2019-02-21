import { Component, EventEmitter, Input, Output, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'frejya-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {
  @Input() columns = [];
  @Input() rows = [];
  @Output() filterSelected = new EventEmitter();
  @Output() sortActivated = new EventEmitter();
  public toggleFilters = false; // show/hide filters
  public activeSort: {
    column: string,
    direction: string
  }; // active sort column and direction
  public activeFilter: any; // id of the active filter
  public filterObj = {}; // array of selected filters
  public hasFilters = false; // check if there are filters selected

  constructor() {}

  ngOnInit() {
    this.activeSort = {column: '', direction: 'desc'};
  }

  isNumber(value) {
    return typeof value === 'number';
  }

  /**
   * @description add or removes values to the filter  and emits it to the parent component
   * @param checkedFilter: checked filter value
   */
  toggleFilterValues(checkedFilter) {
    if (!this.filterObj[checkedFilter.prop]) {
      this.filterObj[checkedFilter.prop] = checkedFilter.value;
    } else {
      const auxArr = this.filterObj[checkedFilter.prop].split(',');
      if (auxArr.includes(checkedFilter.value)) {
        const indexValue = auxArr.indexOf(checkedFilter.value);
        auxArr.splice(indexValue, 1);
      } else {
        auxArr.push(checkedFilter.value);
      }
      this.filterObj[checkedFilter.prop] = auxArr.join(',');
    }
    // remove key of the column from the filter object if it's empty
    if (this.filterObj[checkedFilter.prop] === '') {
      delete this.filterObj[checkedFilter.prop];
    }
    this.hasFilters = Object.keys(this.filterObj).length !== 0 ? true : false;
    this.filterSelected.emit(Object.assign({}, this.filterObj));
  }

  /**
   * @description toggle filter box
   * @param column - column that has filter toggled
   * @param event - click event
   */
  toggleFilterBox(event, column) {
    event.stopPropagation();
    this.toggleFilters = !this.toggleFilters;
    this.activeFilter = column;
  }

  /**
   * @description toggles sorting asc or desc of the table rows with the chosen column
   * @param {any} column - column to be sorted with
   */
  toggleSort(column: any) {
    if (column.sortable) {
      this.activeSort.column = column.prop;
      if (this.activeSort.direction === 'asc') {
        this.activeSort.direction = 'desc';
      } else {
        this.activeSort.direction = 'asc';
      }
      this.sortActivated.emit(Object.assign({}, this.activeSort));
    }
  }

  /**
   * @desccription listens on document click event and close the filter box on document click
   * @param {MouseEvent} ev - click event
   */
  @HostListener('document:click', ['$event'])
  onDocumentClicked(ev: any) {
    this.toggleFilters = false;
  }

  /**
   * @description prevent closing the filter box
   * @param ev - click event
   */
  preventClose(ev) {
    event.stopPropagation();
  }
}
