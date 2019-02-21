import { FilterByValuesPipe } from './filter-by-values.pipe';
import { SortByColumnPipe } from './sort-by-column.pipe';

const filterByValues = new SortByColumnPipe();

describe('FilterByValuesPipe', () => {
  it('should sort an array of objects desc', () => {
    const mockObject = [
      {
        name: 'aziz',
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
      },
      {
        name: 'aziz',
        lastname: 'user'
      },
    ];
    expect(filterByValues.transform(mockObject, {column: 'name', direction: 'desc' })).toEqual(expectedResult);
  });
});
