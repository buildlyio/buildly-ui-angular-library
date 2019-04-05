import {Component, OnInit} from '@angular/core';
import {TextHelper} from '@freyjaDemo/app/shared/helpers/text.helper';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'fj-demo-native-dropdown',
  templateUrl: './native-dropdown.component.html',
  styleUrls: ['./native-dropdown.component.scss']
})
export class DemoNativeDropdownComponent implements OnInit {

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

  testFormGroup: FormGroup;

  public sizeShowCase = this.textHelper.dedent(`
    <fj-custom-dropdown [options]="options" size="large"></fj-custom-dropdown>
    <fj-custom-dropdown [options]="options" size="medium"></fj-custom-dropdown>
    <fj-custom-dropdown [options]="options" size="small"></fj-custom-dropdown>
    <fj-custom-dropdown [options]="options" size="micro"></fj-custom-dropdown>`);

  constructor(private textHelper: TextHelper) {}

  ngOnInit() {
    this.testFormGroup = new FormGroup({
      selectValue: new FormControl('')
    });
  }

  onOptionSelected(event) {
    console.log(this.testFormGroup.value);
  }
}
