import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mg-ui-card-icon-title',
  templateUrl: './card-icon-title.component.html',
  styleUrls: ['./card-icon-title.component.scss']
})
export class CardIconTitleComponent implements OnInit {
  @Input() icon: string;
  @Input() iconColor: string;
  @Input() iconWidth = 'auto';

  constructor() { }

  ngOnInit() {}

}
