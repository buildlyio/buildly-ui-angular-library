import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '@libs/freyja-ui/src/lib/shared/base.component';

@Component({
  selector: 'fj-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent extends BaseComponent implements OnInit {
  @Input() public height;
  @Input() public color = 'default';
  @Input() public inline = false;
  @Input() public fullHeight = false;
  public colorClass: string;
  public dimensions: number;
  public heightDimensions: string;
  constructor() {
    super();
  }
  ngOnInit() {
    switch (this.size) {
      case 'micro':
        this.dimensions = 20;
        break;
      case 'small':
        this.dimensions = 30;
        break;
      case 'large':
        this.dimensions = 100;
        break;
      default:
        this.dimensions = 60;
    }
    switch (this.color) {
      case 'white':
        this.colorClass = 'spinner__white';
        break;
      default:
        this.colorClass = 'spinner__primary';
    }

    if (this.fullHeight) {
      const spinnerElem = document.querySelector('.spinner-wrap');
      const spinnerElemOffset = this.elemPosition(spinnerElem);
      this.heightDimensions = `calc(100vh - ${spinnerElemOffset.top}px)`;
    } else if (this.height) {
      this.heightDimensions = `${this.height}px`;
    } else {
      this.heightDimensions = '100%';
    }
  }

  public elemPosition(el) {
    let x = 0;
    let y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft;
      y += el.offsetTop;
      el = el.offsetParent;
    }
    return {top: y, left: x};
  }

  /**
   * Generate classes using BEM appraoch and bind to ngClass
   */
  public generateClassList() {
    const baseCls = `spinner--`;
    const classes = {
      [`${baseCls}${this.theme}`]: this.theme,
    };
    return classes;
  }
}
