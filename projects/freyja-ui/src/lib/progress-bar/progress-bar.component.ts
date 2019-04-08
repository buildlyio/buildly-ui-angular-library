import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fj-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() currentValue: number; // current value
  @Input() plannedValue: number; // planned value
  /**
   * color that indicates that the current value exceeds or equal the planned value
   */
  @Input() finishColor: string;
  /**
   * color that indicates progress in the bar
   */
  @Input() progressColor: string;

  public percentage; // percentage of the progressBar
  public color; // color of the progressBar
  public dangerColor;

  constructor() { }

  ngOnInit() {
    // change the color and the progress bar highlighted percentage
    if (this.calculatePercentage() >= 100) {
      this.percentage = `100%`;
      this.color = this.finishColor ; // set color to the selected danger color
    } else {
      this.percentage = `${this.calculatePercentage().toString()}%`;
      this.color = this.progressColor ; // set color to the selected progress color
    }
  }

  /**
   * calculates the percentage to be shown in the progress bar
   */
  public calculatePercentage(): number {
    return (this.currentValue / this.plannedValue) * 100;
  }

}
