import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public inProgressExample;
  public finishedExample;

  constructor(
    private textHelper: TextHelper
  ) { }

  ngOnInit() {
    this.inProgressExample = this.textHelper.dedent`
    <fj-progress-bar
       [currentValue]="15"
       [plannedValue]="20"
    ></fj-progress-bar>
  `;
    this.finishedExample = this.textHelper.dedent`
    <fj-progress-bar
      [currentValue]="10"
      [plannedValue]="10"
      [finishColor]="'green'"
    ></fj-progress-bar>
  `;
  }

}
