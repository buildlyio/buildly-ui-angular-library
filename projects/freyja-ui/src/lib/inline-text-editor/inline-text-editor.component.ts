import { Component, OnInit, Input, EventEmitter, Output, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'fj-inline-text-editor',
  templateUrl: './inline-text-editor.component.html',
  styleUrls: ['./inline-text-editor.component.scss']
})
export class InlineTextEditorComponent implements OnInit {

  documentClickListener: Function;

  /**
   * event triggered when an element is edited
   */
  @Output() elementEdited: EventEmitter<any> = new EventEmitter();

  /**
   * event triggered when an element is edited
   */
  @Output() doubleClick: EventEmitter<any> = new EventEmitter();

  @Input() value: string;

  @Input() name: string;

  @Input() displayElement: 'a' | 'div' | 'p' | 'h1' | 'h2' | 'h3' = 'p';

  @Input() displayElementCustomStyles;
  @Input() inputCustomStyles;

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

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.isEdit = false;
  }

  /**
   * activates edit mode for one field
   */
  public activateEditMode() {
    this.isEdit = true;
    this.setDocumentListenerForCloseSelect();
    this.doubleClick.emit();
  }

  /**
   * a function that will be triggered when an item has been edited
   * @param value - value of the edited element
   * @param element - element that is edited
   * @param index of the element in case of dynamic fields like details blocks
   */
  public onEditElement(value: string, elementName) {
    this.isEdit = false;
    const editObj = {
      value,
      elementName
    };
    this.elementEdited.emit(editObj);
  }

  /**
   * Sets a listener on the document for clicks, which will close the
   * inline-text-editor currently opened.
   */
  private setDocumentListenerForCloseSelect() {
    this.documentClickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const clickedInside = this.elementRef.nativeElement.contains(event.srcElement);
      if (!clickedInside) {
        this.close();
      }
    });
  }

  /**
   * To disable edit mode and kill the documentClickListener.
   */
  private close() {
    this.isEdit = false;

    if (typeof this.documentClickListener === 'function') {
      this.documentClickListener();
    }
  }
}
