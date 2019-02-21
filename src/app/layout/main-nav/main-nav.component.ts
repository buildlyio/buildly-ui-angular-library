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
      path: '/Content-switcher',
      label: 'Content switcher'
    },
    {
      path: '/accordion',
      label: 'Accordion'
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
      path: '/number-input',
      label: 'Number Input'
    },
    {
      path: '/text-input',
      label: 'Text Input'
    },
    {
      path: '/svg-icon',
      label: 'SVG Icon'
    },
    {
      path: '/modal',
      label: 'Modal'
    },
    {
      path: '/card',
      label: 'Card'
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
  ];
  constructor() { }

  ngOnInit() {
  }

}
