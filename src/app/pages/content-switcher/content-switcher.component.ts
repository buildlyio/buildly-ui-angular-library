import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-content-switcher',
  templateUrl: './content-switcher.component.html',
  styleUrls: ['./content-switcher.component.scss']
})
export class ContentSwitcherComponent implements OnInit {
  public subNavOptions = [{'label': 'all', 'value': 'all' }, {'label': 'active', 'value': 'active' }];
  constructor() {}

  ngOnInit() {
  }

}
