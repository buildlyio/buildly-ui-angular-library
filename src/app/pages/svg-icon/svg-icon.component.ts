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
  // <fj-svg-icon svgName="plus_circle"></fj-svg-icon>`;
  // <fj-svg-icon svgUrl="http://localhost:4200/assets/svg-icons/plus_circle.svg"></fj-svg-icon>
  // <fj-svg-icon svgUrl="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-address-book.svg"></fj-svg-icon>  `;
  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }

}
