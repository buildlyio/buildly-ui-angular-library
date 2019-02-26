import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public spinnerExample;

  constructor(
    private textHelper: TextHelper
  ) { }

  ngOnInit() {
    this.spinnerExample = this.textHelper.dedent`
    <fj-spinner size="xsmall"></fj-spinner>
    <fj-spinner size="small"></fj-spinner>
    <fj-spinner size="large"></fj-spinner>
  `;
  }

}
