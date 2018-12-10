import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public checkedState = this.textHelper.dedent`
  <fj-checkbox checked>Checked</fj-checkbox>
  `;

  public uncheckedState = this.textHelper.dedent`
  <fj-checkbox>Checked</fj-checkbox>
  `;

  public disabledState = this.textHelper.dedent`
  <fj-checkbox disabled="true">I am disabled</fj-checkbox>
  <fj-checkbox disabled checked>I am checked</fj-checkbox>
  `;

  public labelPosition = this.textHelper.dedent`
  <fj-checkbox labelPosition="before">Label Before</fj-checkbox>
  <fj-checkbox checked>Label After</fj-checkbox>
  `;

  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }

}
