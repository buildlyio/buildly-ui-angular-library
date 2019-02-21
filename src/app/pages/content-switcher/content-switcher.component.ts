import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-content-switcher',
  templateUrl: './content-switcher.component.html',
  styleUrls: ['./content-switcher.component.scss']
})
export class ContentSwitcherComponent implements OnInit {
  public subNavOptions = [{'label': 'all', 'value': 'all' }, {'label': 'active', 'value': 'active' }];

  public codeType = this.textHelper.dedent`
  <fj-content-switcher [options]="[{'label': 'all', 'value': 'all' }, {'label': 'active', 'value': 'active' }]"></fj-content-switcher>
  `;
  constructor(public textHelper: TextHelper) {}

  ngOnInit() {
  }

}
