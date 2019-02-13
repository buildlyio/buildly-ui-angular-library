import { Component, OnInit } from '@angular/core';
import { CardItemOptions } from '@libs/freyja-ui/src/lib/card-item/card-item-options';
import { TextHelper } from "@freyjaDemo/app/shared/helpers/text.helper";

@Component({
  selector: 'fj-demo-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  options: CardItemOptions;
  item;
  item2;
  public navItems = [
    {
      path: '#horizontal-layout',
      label: 'Horizontal Layout'
    },
    {
      path: '#vertical-layout',
      label: 'Vertical Layout'
    }
  ];

  public customCardItemExample;

  constructor(
    private textHelper: TextHelper
  ) { }

  ngOnInit() {
    this.customCardItemExample = this.textHelper.dedent`
    <fj-card-item
      [layout]="'horizontal'"
    >
      <div card-item-header>
        <h3>Custom content</h3>
        <p>This is a card with custom custom content card</p>
      </div>
      <div card-item-body>
        <p>You can add content to the card body aswell</p>
      </div>
    </fj-card-item>
  `;
    this.item = {
      title: 'Title',
      subtext: 'This is a sub text',
      subtext2: 'this is the second subtext',
      model: 'this is the second subtext',
      status: 'this is the second subtext',
      caption: 'caption',
      link: 'link',
      description: 'this is the description',
      create_date: '2019-01-29T13:39:20.868000Z',
      edit_date: '2019-01-29T13:39:20.868000Z',
      image: '/assets/img/image-example.jpg',
      thumbnail: '/assets/img/image-example.jpg',
    };
    this.item2 = {
      title: 'Title',
      subtext: 'This is a sub text',
      subtext2: 'this is the second subtext',
      model: 'this is the second subtext',
      status: 'this is the second subtext',
      caption: 'caption',
      link: 'link',
      description: 'this is the description',
      create_date: '2019-01-29T13:39:20.868000Z',
      edit_date: '2019-01-29T13:39:20.868000Z',
    };
    this.options = {
      title: {
        prop: 'title',
        label: 'Title'
      },
      subText: {
        prop: 'subtext',
        label: 'Subtext'
      },
      subText2: {
        prop: 'subtext2',
        label: 'Subtext2'
      },
      picture: {
        thumbnail: 'thumbnail',
        image: 'image'
      },
      date1: {
        prop: 'create_date',
        label: 'Created at'
      },
      date2: {
        prop: 'edit_date',
        label: 'Updated at'
      },
      dateHeader1: {
        prop: 'create_date',
        label: 'Created at'
      },
      dateHeader2: {
        prop: 'edit_date',
        label: 'Updated at'
      },
      caption: {
        prop: 'caption',
        label: 'Caption'
      },
      link: {
        prop: 'link',
        label: 'Link'
      },
      details: [
        {
          prop: 'model',
          label: 'Model'
        },
        {
          prop: 'status',
          label: 'Status'
        },
      ],
      description: {
        prop: 'description',
        label: 'Description'
      },
      otherActions: [
        {
          label: '•••',
          value: '•••'
        },
        {
          label: 'Other Action 1',
          value: 'otherAction1'
        },
        {
          label: 'Other Action 2',
          value: 'otherAction2'
        }
      ],
      primaryAction: {
        label: 'Preview',
        value: 'primaryAction'
      },
      secondaryAction: {
        label: 'Publish',
        value: 'secondaryAction'
      },
      belowMenuPrimaryAction: {
        label: 'Between Primary Action',
        value: 'belowMenuPrimaryAction'
      },
    };
  }
}
