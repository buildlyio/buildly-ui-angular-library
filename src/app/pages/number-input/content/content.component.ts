import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public numberState = this.textHelper.dedent`
  <fj-number-input>42</fj-number-input>
  `;


  public disabledState = this.textHelper.dedent`
  <fj-number-input>42</fj-number-input>
  `;

  public labelPosition = this.textHelper.dedent`
  <fj-number-input>42</fj-number-input>
  `;

  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }

}
