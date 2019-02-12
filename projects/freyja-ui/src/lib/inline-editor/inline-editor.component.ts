import { Component, OnInit, Input, EventEmitter, ViewChild, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'fj-inline-editor',
  templateUrl: './inline-editor.component.html',
  styleUrls: ['./inline-editor.component.scss']
})
export class InlineEditorComponent implements OnInit {

  /**
   * event triggered when an element is edited
   */
  @Output() elementEdited: EventEmitter<any> = new EventEmitter();

  @Input() value: string;

  @Input() name: string;

  /**
   * checks if a click event is a single ou double click
   * {boolean}
   */
  public isSingleClick = false;
  /**
   * checks wether the card item elements are in edit mode
   * {boolean}
   */
  public isEdit = false;
  constructor() {}
  ngOnInit() {
    this.isEdit = false;
  }

  /**
   * activates edit mode for one field
   */
  public activateEditMode() {
    this.isSingleClick = false;
    this.isEdit = true;
  }

  /**
   * a function that will be triggered when an item has been edited
   * @param value - value of the edited element
   * @param element - element that is edited
   * @param index of the element in case of dynamic fields like details blocks
   */
  public onEditElement(value: string, index?: number) {
    this.isEdit = false;
    const editObj = {
      value,
      index
    };
    this.elementEdited.emit(editObj);
  }
}
