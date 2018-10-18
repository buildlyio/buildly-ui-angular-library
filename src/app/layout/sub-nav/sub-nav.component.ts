import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fj-demo-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  @Input() navItems;
  constructor() { }

  ngOnInit() {
  }

}
