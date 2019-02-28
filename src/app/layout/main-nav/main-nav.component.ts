import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  public navItems = [
    {
      path: '/button',
      label: 'Button'
    },
    {
      path: '/radio-button',
      label: 'Radio Button'
    },
    {
      path: '/toggle',
      label: 'Toggle'
    },
    {
      path: '/check-box',
      label: 'Check Box'
    },
    {
      path: '/content-switcher',
      label: 'Content switcher'
    },
    {
      path: '/text-input',
      label: 'Text Input'
    },
    {
      path: '/number-input',
      label: 'Number Input'
    },
    {
      path: '/spinner',
      label: 'Spinner'
    },
    {
      path: '/progress-bar',
      label: 'Progress Bar'
    },
    // {
    //   path: '/svg-icon',
    //   label: 'SVG Icon'
    // }, // not working properly yet, should be fixed
    {
      path: '/modal',
      label: 'Modal'
    },
    {
      path: '/inline-editing',
      label: 'Inline Editing'
    },
    {
      path: '/card',
      label: 'Card'
    },
    {
      path: '/table',
      label: 'Table'
    },
    {
      path: '/accordion',
      label: 'Accordion'
    },
    {
      path: '/card-item',
      label: 'Card-item'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
