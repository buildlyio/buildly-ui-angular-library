import {Component, OnInit} from '@angular/core';
import {TextHelper} from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-native-dropdown',
  templateUrl: './native-dropdown.component.html',
  styleUrls: ['./native-dropdown.component.scss']
})
export class NativeDropdownComponent implements OnInit {
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
      label: 'Option 2',
      value: 'option2'
    },
    {
      label: 'Option 3',
      value: 'option3'
    }
  ];

  public nativeDropdown = this.textHelper.dedent(`<fj-native-dropdown [options]="options" (optionSelected)="onOptionSelected($event)">
                           </fj-native-dropdown>`);
  constructor(private textHelper: TextHelper) {}

  ngOnInit() {
  }

  onOptionSelected($event) {}
}
