import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  toggleExampleHTML;
  constructor(private textHelper: TextHelper) {
  }

  ngOnInit() {
    this.toggleExampleHTML = this.textHelper.dedent`
    <fj-toggle [size]="'micro'"></fj-toggle>
    <fj-toggle [size]="'small'"></fj-toggle>
    <fj-toggle [size]="'medium'"></fj-toggle>
    <fj-toggle [size]="'large'"></fj-toggle>
  `;
  }
}

