import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class DemoTextInputComponent implements OnInit {

  constructor(public textHelper: TextHelper) { }
  public textBasic = this.textHelper.dedent`
  `;
  ngOnInit() {
  }

}
