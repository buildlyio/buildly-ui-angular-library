import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fj-table-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  @Input() actions;
  @Input() showSpinner = false;
  @Output() protected delete: EventEmitter<any> = new EventEmitter();
  @Output() protected download: EventEmitter<any> = new EventEmitter();

  constructor() { }

  /**
   * emits value to the parent on delete button click
   * @param $event - click event of the delete element
   */
  deleteEvent($event) {
    $event.stopPropagation();
    this.delete.emit();
  }

  /**
   * emits value to the parent on download button click
   * @param $event - click event of the delete element
   */
  downloadEvent($event) {
    $event.stopPropagation();
    if (!this.showSpinner) {
      this.download.emit();
    }
  }
}
