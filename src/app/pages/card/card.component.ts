import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private textHelper: TextHelper
  ) { }
  public customCardExample;

  ngOnInit() {
    this.customCardExample = this.textHelper.dedent`
    <fj-card>
      You can add content to the card body like this
    </fj-card>
  `;
  }

}
