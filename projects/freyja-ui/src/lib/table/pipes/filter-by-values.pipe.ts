import { Pipe, PipeTransform } from '@angular/core';

/**
 * @description it filters items by strings separated by commas
 */
@Pipe({
  name: 'filterByValues',
})
export class FilterByValuesPipe implements PipeTransform {

  transform(items: Array<any>, filter: {[key: string]: any }) {
    if (filter) {
      const filterKeys = Object.keys(filter);


      const itemsIterator = item => {

        const filterKeysIterator = key => {
          const filterArr = filter[key].split(',');
          if (typeof item[key] === 'object') {
            return !item[key].find( itemElem => {
              return filterArr.includes(itemElem);
            });
          } else {
            return !filterArr.includes(item[key]);
          }
        }

        const notMatchingField = filterKeys.find(filterKeysIterator);
        return !notMatchingField; // true if matches all fields
      }

      return items.filter( itemsIterator );
    } else {
      return items;
    }
  }
}
