import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'fj-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent extends BaseComponent implements OnChanges, OnInit {
  @Input() iconClass = '';
  @Input() svgName: string;
  @Input() width: number;
  @Input() fillColor = 'white';
  @Input() strokeColor: string;
  @Input() display = 'inline-flex';
  @Input() opacity = 1;

  constructor() {
    super();
  }

  ngOnInit() {
    this.margin = '0';
    this.style = {
      'width': this.width,
      'height': 'auto',
      'opacity': this.opacity,
      'display': this.display,
      'margin': this.margin,
    };
  }
  ngOnChanges() {
    this.generateClass();
  }

  /**
   * @description Generates the class for the icon
   */
  public generateClass() {
    this.class = `${this.iconClass} `
      + `${this.size ? 'icon--size--' + this.size : ''} `
      + `${this.fillColor ? 'icon--fill--' + this.fillColor : ''} `
      + `${this.strokeColor ? 'icon--stroke--' + this.strokeColor : ''}`;
  }
}
