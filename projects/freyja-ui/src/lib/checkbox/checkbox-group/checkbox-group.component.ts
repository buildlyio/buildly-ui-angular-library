import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fj-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {

  /**
   * Checkbox Options
   */
  @Input() options: any;
  /**
   * Checkbox group label
   */
  @Input() label: any;
  /**
   * error in the radio button group
   */
  @Input() error: any;
  /**
   * reactive form control name
   */
  @Input() controlName: string;
  /**
   * reactive form group
   */
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
