import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public numberState = this.textHelper.dedent`
  <fj-number-input label="Label" value="0"></fj-number-input>
  `;


  public disabledState = this.textHelper.dedent`
  <fj-number-input disabled label="I am disabled" value="99"></fj-number-input>
  `;

  public placeholder = this.textHelper.dedent`
  <fj-number-input placeholder="Enter Value" label="Placeholder Example"></fj-number-input>
  `;

  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }

}
