import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  public navItems = [
    {
      path: '#overwiev',
      label: 'Overview'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
