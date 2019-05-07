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

  /**
   * Value to be displayed and edited.
   */
  @Input() value: string;
  /**
   * Value to be displayed if there is no value set
   */
  @Input() defaultValue: string;

  /**
   * Name of the editor. Useful for distinguishing the element in the 'elementEdited' Output.
   */
  @Input() name: string;
  /**
   * index of the element in case of dynamic fields
   */
  @Input() index: string;

  /**
   * The HTML element which should be used for display. Defaults to 'p'.
   */
  @Input() displayElement: 'a' | 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' = 'p';

  /**
   * Custom styles for the display element.
   */
  @Input() displayElementCustomStyles;

  /**
   * Custom styles for the input.
   */
  @Input() inputCustomStyles;

  /**
   * a boolean that is used to indicate if the inline editing should be disabled
   */
  @Input() disabled;

  /**
   * checks wether the card item elements are in edit mode
   */
  public isEdit = false;
  /**
   * boolean to show the edit pencil icon
   */
  protected showPencil = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.isEdit = false;
  }

  /**
   * activates edit mode for one field
   * @param evt - mouse event
   */
  public activateEditMode(evt) {
    this.showPencil = false;
    if (!this.disabled) {
      this.isEdit = true;
      this.setDocumentListenerForCloseSelect();
      this.doubleClick.emit();
    }
  }

  /**
   * a function that will be triggered when an item has been edited
   * @param value - value of the edited element
   * @param element - element that is edited
   */
  public onEditElement(value: string, elementName) {
    this.isEdit = false;
    const editObj = {
      value,
      elementName,
      index: this.index
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
