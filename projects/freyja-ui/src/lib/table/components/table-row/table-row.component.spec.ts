import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowComponent } from './table-row.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SortByColumnPipe } from '../../pipes/sort-by-column.pipe';

describe('TableRowComponent', () => {
  let component: TableRowComponent;
  let fixture: ComponentFixture<TableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowComponent, SortByColumnPipe ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should filter an array of objects with a search string that contains search values separated by comma', () => {
    const mockObject = [
      {
        name: 'user',
        lastname: 'user'
      },
      {
        name: 'test',
        lastname: 'test'
      }
    ];
    const expectedResult = [
      {
        name: 'test',
        lastname: 'test'
      }
    ];
    expect(component.applyFilters(mockObject, {name: 'test'})).toEqual(expectedResult);
  });
});
