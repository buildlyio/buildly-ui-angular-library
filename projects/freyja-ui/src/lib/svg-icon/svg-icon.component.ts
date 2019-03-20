// Angular Imports
import { Component, OnInit, Input, OnChanges, ElementRef, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs/operators';

// Internal Imports
import { IconRegistryService } from './icon-registry.service';
import { BaseComponent } from '../shared/base.component';

/**
 * Freyja SVG ICON Component according to specifics of Freyja Design
 */
@Component({
  selector: 'fj-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'fj-svg-icon'
  }
})
export class SvgIconComponent extends BaseComponent implements OnInit, OnChanges {

  /**
   * Name of icon or svg file to be pulled from cdn/repository
   */
  @Input() svgName = '';

  /**
   * If it's going to be inline to other content
   */
  @Input() inline: Boolean = true;

  @Input() iconClass = '';
  @Input() width: number;
  @Input() fillColor = '#BFBFBF';
  @Input() strokeColor: string;
  @Input() display = 'inline-flex';
  @Input() opacity = 1;

  /**
   * Capture reference to element ref to inject svg into html
   * @param _iconRegistryService Icon Registry service to pull and cache icons
   * @param _elementRef Reference to Component HTML to inject SVG
   */
  constructor(private _iconRegistryService: IconRegistryService,
    public _elementRef: ElementRef) {
    super();
  }

  /**
   * Load Icon SCG from Service
   */
  ngOnInit() {
    this.loadSvgIconByName();
  }

  /**
   * Method to call registry service to get icon svg
   */
  private loadSvgIconByName() {
    if (this.svgName) {
      this._iconRegistryService.addSvgIcon(this.svgName).pipe(take(1)).subscribe(
        svg => this.insertSvgElement(svg),
        (err: Error) => console.log(`Error retrieving icon: ${err.message}`)
      );
    }
  }


  /**
   * Insert SVG content to component nativeElement
   * @param svg SVG content for icon fetch from service
   */
  private insertSvgElement(svg: SVGElement) {
    this.clearSvgElement();

    this._elementRef.nativeElement.appendChild(svg);
  }

  /**
   * Clear Component SVG before inserting
   */
  private clearSvgElement() {
    const layoutElement: HTMLElement = this._elementRef.nativeElement;
    const childCount = layoutElement.childNodes.length;

    for (let i = 0; i < childCount; i++) {
      layoutElement.removeChild(layoutElement.childNodes[i]);
    }
  }

  /**
   * Capture on change and update classes
   */
  ngOnChanges() {
    this.generateClass();
  }


  /**
   * @description Generates the class for the icon
   */
  public generateClass() {
    this.class = `${this.iconClass} `
      + `${this.fillColor ? 'icon--fill--' + this.fillColor : ''} `
      + `${this.strokeColor ? 'icon--stroke--' + this.strokeColor : ''}`;
  }

}
