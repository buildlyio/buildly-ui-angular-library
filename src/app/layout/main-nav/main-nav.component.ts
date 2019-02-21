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
      path: '/modal',
      label: 'Modal'
    },
    {
      path: '/spinner',
      label: 'Spinner'
    },
    {
      path: '/progress-bar',
      label: 'Progress Bar'
    },

    {
      path: '/table',
      label: 'Table'
    },
    {
      path: '/card-item',
      label: 'Card-item'
    },
    {
      path: '/svg-icon',
      label: 'SVG Icon'
    },
    {
      path: '/card',
      label: 'Card'
    },
    {
      path: '/accordion',
      label: 'Accordion'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
