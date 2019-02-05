import {Component, EventEmitter, Input, Output, OnInit, ElementRef} from '@angular/core';
import {ModalContent} from './modal-options';

@Component({
  selector: 'fj-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  /**
   * Content of the modal window
   */
  @Input() modalContent: ModalContent = {};
  /**
   * size of the modal
   */
  @Input() size: 'small' | 'big';
  /**
   * custom styles
   */
  @Input() customStyles;
  /**
   * an output that will be emitted on an action is triggered in the modal
   * @type {EventEmitter<any>}
   */
  @Output() actionClicked: EventEmitter<any> = new EventEmitter();

  /**
   * flag to show or hide the modal
   * @type {boolean}
   */
  showModal = false;

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit() {
    if (!this.size) {
      this.size = 'small';
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
    this.showModal = false;
  }

  /**
   * this function avoid closing the modal when clicking on its content
   * @param evt
   */
  modalClicked(evt) {
    evt.stopPropagation();
  }

}
