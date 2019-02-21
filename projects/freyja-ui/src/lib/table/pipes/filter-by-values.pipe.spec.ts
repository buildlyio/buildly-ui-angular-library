import { FilterByValuesPipe } from './filter-by-values.pipe';

const filterByValues = new FilterByValuesPipe();

describe('FilterByValuesPipe', () => {
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
    expect(filterByValues.transform(mockObject, {name: 'test'})).toEqual(expectedResult);
  });
});
