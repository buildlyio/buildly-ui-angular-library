import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';


@Component({
  selector: 'fj-demo-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class DemoSvgIconComponent implements OnInit {
  public navItems = [
    {
      path: '#overwiev',
      label: 'Overview'
    },
    {
      path: '#type',
      label: 'Type'
    }
  ];
    // tslint:disable-next-line:max-line-length
  public iconCode = this.textHelper.dedent`
  <fj-svg-icon class="svg-icon" svgName="icon-api"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-application"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-builder"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-code"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-docs"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-health-status"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-link"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-market"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-module"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-upload"></fj-svg-icon>
  <fj-svg-icon class="svg-icon" svgName="icon-walhall"></fj-svg-icon> `;
  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }

}
