import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class DemoNumberInputComponent implements OnInit {
  public navItems = [
    {
      path: '#overwiev',
      label: 'Overview'
    },
    {
      path: '#type',
      label: 'Type'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
