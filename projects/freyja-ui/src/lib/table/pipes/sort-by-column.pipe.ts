import { Pipe, PipeTransform } from '@angular/core';

/**
 * @description it filters items by strings separated by commas
 */
@Pipe({
  name: 'sortByColumn',
})
export class SortByColumnPipe implements PipeTransform {

  transform(items: Array<any>, sort: {[key: string]: any }) {
    if (sort) {
      let sortedItems = [];
      const collator = new Intl.Collator();
      if (sort.direction === 'asc') {
        sortedItems = items.sort( (a, b) => {
          return collator.compare(a[sort.column], b[sort.column])
        });
      } else {
        sortedItems = items.sort( (a, b) => {
          return collator.compare(b[sort.column], a[sort.column])
        });
      }
      return sortedItems;
    } else {
      return items;
    }
  }
}
