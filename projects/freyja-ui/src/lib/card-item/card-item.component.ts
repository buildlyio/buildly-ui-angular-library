import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CardItemOptions } from "@libs/freyja-ui/src/lib/card-item/card-item-options";

@Component({
  selector: 'fj-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  /**
   * current item data
   */
  @Input() item: any;
  /**
   * current item options
   */
  @Input() options: CardItemOptions;
  /**
   * card layout (vertical or horizontal)
   */
  @Input() layout: 'vertical' | 'horizontal';
  /**
   * if the card is highlight card
   */
  @Input() isHighlight: false;
  /**
   * event triggered when an action is clicked
   */
  @Output() actionClicked: EventEmitter<any> = new EventEmitter();
  /**
   * event triggered when an element is edited
   */
  @Output() elementEdited: EventEmitter<any> = new EventEmitter();

  /**
   * checks wether the card item is expanded
   * {boolean}
   */
  public isExpanded;

  /**
   * checks if a click event is a single ou double click
   * {boolean}
   */
  public isSingleClick = false;
  /**
   * checks wether the card item elements are in edit mode
   * {boolean}
   */
  public isEdit = {
    picture: false,
    title: false,
    subText: false,
    subText2: false,
    caption: false,
    link: false,
    date1: false,
    date2: false,
    details: false,
    description: false,
    tags: false
  };

  public showBelowMenu = false;

  public inputFieldStyles  = { marginTop: 0, width: '100%' };
  ngOnInit() {
    // init dynamic details field isEdit value to false
    if (this.options && this.options.details) {
      this.options.details.forEach( (detailItem, index: number) => {
        this.isEdit['detailItem' + index] = false;
      });
    }
  }

  /**
   * fired when an action has been clicked
   * @param evt - click event
   * @param actionType - type of the action that has been fired
   */
  public onActionClicked(evt, actionType?: string) {
    if (evt.stopPropagation) {
      evt.stopPropagation();
    } else {
      actionType = evt;
    }
    this.actionClicked.emit(actionType);
  }

  /**
   * activates edit mode for one field
   * @param evt - click event
   * @param field - field to be edited
   */
  public activateEditMode(evt, field) {
    this.isSingleClick = false;
    this.isEdit[field] = true;
  }

  /**
   * toggles expanded view on single click
   */
  public toggleExpanded() {
    // deactivate any active edit mode
    Object.keys(this.isEdit).forEach( key => {
      this.isEdit[key] = false;
    });
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.isExpanded = !this.isExpanded;
      }
    }, 250);

  }

  /**
   * a function that will be triggered when an editable input is focused and it will deactivate the edit mode for other inputs
   * @param {string} element - element  is edited
   */
  public onInputFocused(element: string) {
    Object.keys(this.isEdit).forEach( key => {
      if (key !== element && this.isEdit[key]) {
        this.isEdit[key] = false;
      }
    });
  }

  /**
   * a function that will be triggered when an item has been edited
   * @param {string} value - value of the edited element
   * @param {string} element - element that is edited
   * @param {number} index of the element in case of dynamic fields like details blocks
   */
  public onEditElement(value: string, element: string, index?: number) {
    this.isEdit[element] = false;
    const editObj = {
      element,
      value,
      index
    };
    this.elementEdited.emit(editObj);
  }


}
