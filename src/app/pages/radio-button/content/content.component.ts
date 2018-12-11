import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public checkedState = this.textHelper.dedent`
  <fj-radio-button checked>Checked</fj-radio-button>
  `;

  public uncheckedState = this.textHelper.dedent`
  <fj-radio-button>Checked</fj-radio-button>
  `;

  public disabledState = this.textHelper.dedent`
  <fj-radio-button disabled="true">I am disabled</fj-radio-button>
  <fj-radio-button disabled checked>I am checked</fj-radio-button>
  `;

  public labelPosition = this.textHelper.dedent`
  <fj-radio-button labelPosition="before">Label Before</fj-radio-button>
  <fj-radio-button checked>Label After</fj-radio-button>
  `;

  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }

}
