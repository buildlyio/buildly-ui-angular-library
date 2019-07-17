import { Component } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class DemoMenuComponent {

  public options = [
    {
      label: 'Option 1',
      value: 'option1'
    },
    {
      label: 'Option 2',
      value: 'option2'
    },
    {
      label: 'Option 3',
      value: 'option3'
    },
    {
      label: 'Option 4',
      value: 'option4'
    }
  ];

  public defaultShowCase = this.textHelper.dedent(`
  <fj-menu [options]="options" (optionSelected)="onOptionSelected($event)">
    <fj-button>…</fj-button>
  </fj-menu>`);

  public disabledShowCase = this.textHelper.dedent(`
  <fj-menu [options]="options" (optionSelected)="onOptionSelected($event)">
    <fj-button>…</fj-button>
  </fj-menu>`);

  constructor(private textHelper: TextHelper) {}

  /**
   * Prints the selected option in the console
   */
  public onOptionSelected(value): void {
    console.log(value);
  }
}
