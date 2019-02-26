import {Component, Input} from '@angular/core';

@Component({
  selector: 'fj-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() noMargin: false;
  constructor() { }
}
