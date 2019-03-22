import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fj-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss']
})
export class RadioButtonGroupComponent implements OnInit {

  /**
   * Radiogroup Options
   */
  @Input() options: any;
  /**
   * Radiogroup group label
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
