import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'fj-demo-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class DemoCustomDropdownComponent implements OnInit {
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

  ngOnInit() {
    this.testFormGroup = new FormGroup({
      selectValue: new FormControl('')
    });
  }

  onOptionSelected(event) {
    console.log(this.testFormGroup.value);
  }
}
