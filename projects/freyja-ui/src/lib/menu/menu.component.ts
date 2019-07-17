import { Component, ElementRef, Renderer2, Input, Output, EventEmitter, ViewChild } from '@angular/core';

const OPTION_HEIGHT = 40;

@Component({
  selector: 'fj-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  /**
   * Click listener for the menu
   */
  public documentClickListener: Function;

  /**
   * Whether the menu is open or not
   */
  public isOpen = false;

  /**
   * The position of the menu in relation to the toggle
   */
  public position: 'above' | 'below' = 'below';

  /**
   * Menu options
   * Each option be an object with properties label and value
   * {label: string, value: number | string }
   */
  @Input() public options = [];

  /**
   * Whether or not the toggle disabled
   */
  @Input() public disabled = false;

  /**
   * event that is triggered when an option is selected
   * called with value of dropdown
   */
  @Output() public optionSelected: EventEmitter<string | number> = new EventEmitter();

  /**
   * The toggle element
   */
  @ViewChild('toggle') public toggle: ElementRef;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  /**
   * Toggles the menu open or closed, depending on the current state.
   */
  public toggleMenu(): void {
    if (!this.disabled) {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }

  /**
   * Sets a click listener. Closes the panel if clicked outside it.
   */
  private setDocumentListenerForClose(): void {
    this.documentClickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const clickedInside = this.elementRef.nativeElement.contains(event.srcElement);
      if (!clickedInside) {
        this.close();
      }
    });
  }

  /**
   * Closes the panel. Disables the click listener for outside.
   */
  private close(): void {
    this.isOpen = false;

     if (typeof this.documentClickListener === 'function') {
      this.documentClickListener();
    }
  }

  /**
   * Opens the panel. Sets the click listener for outside.
   */
  private open(): void {
    this.isOpen = true;

    // Check if there is space to show the below the toggle
    const distanceFromBottom = window.innerHeight - this.toggle.nativeElement.getBoundingClientRect().bottom;
    this.position = distanceFromBottom > OPTION_HEIGHT * this.options.length ? 'below' : 'above';

    this.setDocumentListenerForClose();
  }

  /**
   * Emits an event to the parent with the select option.
   * 
   * @param value the value selected
   */
  public selectOption(value: string | number): void {
    this.optionSelected.emit(value);
    this.close();
  }
}
