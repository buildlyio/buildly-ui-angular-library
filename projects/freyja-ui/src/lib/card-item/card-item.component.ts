import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CardItemOptions } from './card-item-options';
import { LightBoxComponent } from '../light-box/light-box.component';

@Component({
  selector: 'fj-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

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

  @ViewChild(LightBoxComponent) lightBox: LightBoxComponent;

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

  public showBelowMenu = false;

  public inputFieldStyles  = { marginTop: 0, width: '100%' };

  public lightBoxImages;

  constructor() {}

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
   */
  public onDoubleClick() {
    this.isSingleClick = false;
  }

  /**
   * toggles expanded view on single click
   */
  public toggleExpanded() {
    // deactivate any active edit mode
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.isExpanded = !this.isExpanded;
      }
    }, 250);

  }

  /**
   * a function that is triggered when the card item picture is clicked and it sets the image in the lightbox component
   */
  public onPictureClicked() {
    if (this.item[this.options.picture.image] && this.item[this.options.title.prop]) {
      this.lightBoxImages = [
        {
          src: this.item[this.options.picture.image],
          alt: this.item[this.options.title.prop]
        }
      ];
      this.lightBox.openModal(1);
    }
  }

}
