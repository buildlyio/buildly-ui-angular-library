import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadComponent } from './table-head.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('TableHeadComponent', () => {
  let component: TableHeadComponent;
  let fixture: ComponentFixture<TableHeadComponent>;
  const mockFilter = {
    value: 'test',
    label: 'Test',
    prop: 'projectName'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule],
      declarations: [ TableHeadComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeadComponent);
    component = fixture.componentInstance;
    component.toggleFilters = false;
    fixture.detectChanges();
  });

  it('should toggle the filter', () => {
    const mockEvent = { stopPropagation : () => true };
    component.toggleFilterBox(mockEvent, 2);
    expect(component.toggleFilters).toBe(true);
    expect(component.activeFilter).toBe(2);
  });

  it('should define/emit the filters', () => {
    spyOn(component.filterSelected, 'emit');
    component.toggleFilterValues(mockFilter);
    expect(component.filterObj).toEqual({projectName: 'test'});
    expect(component.filterSelected.emit).toHaveBeenCalledWith({projectName: 'test'});
  });

  it('should define/emit the sort', () => {
    component.activeSort = {column: '', direction: 'asc'};
    const expectedActiveSort = {column: 'projectName', direction: 'desc'};
    spyOn(component.sortActivated, 'emit');
    component.toggleSort({prop: 'projectName', sortable: true});
    expect(component.activeSort).toEqual(expectedActiveSort);
    expect(component.sortActivated.emit).toHaveBeenCalledWith(expectedActiveSort);
  });
});
