import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
