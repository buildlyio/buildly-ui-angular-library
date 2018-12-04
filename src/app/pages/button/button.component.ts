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
        },
        {
          path: '#disabled',
          label: 'Disabled'
        },
        {
          path: '#danger',
          label: 'Danger'
        },
      ]
    },
    {
      path: '#size',
      label: 'Size',
      children: [
        {
          path: '#big',
          label: 'Big'
        },
        {
          path: '#medium',
          label: 'Medium'
        },
        {
          path: '#small',
          label: 'Small'
        },
        {
          path: '#micro',
          label: 'Micro'
        },
      ]
    },
    {
      path: '#shape',
      label: 'Shape',
      children: [
        {
          path: '#radius',
          label: 'Radius'
        },
        {
          path: '#square',
          label: 'Square'
        },
        {
          path: '#round',
          label: 'Round'
        }
      ]
    },
    {
      path: '#icon',
      label: 'Icon',
    },
    {
      path: '#style',
      label: 'Style',
      children: [
        {
          path: '#light',
          label: 'Light'
        },
        {
          path: '#prominent',
          label: 'Prominent'
        }
      ]
    },
    {
      path: '#group',
      label: 'Group',
    },
    {
      path: '#apireference',
      label: 'API Reference',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
