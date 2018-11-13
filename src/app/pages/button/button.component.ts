import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public navItems = [
    {
      path: '#overwiev',
      label: 'Overview'
    },
    {
      path: '#type',
      label: 'Type',
      children: [
        {
          path: '#primary',
          label: 'Primary'
        },
        {
          path: '#secondary',
          label: 'Secondary'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
