import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
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
