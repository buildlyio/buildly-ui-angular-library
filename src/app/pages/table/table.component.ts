import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public tableExampleHTML;
  public tableExampleTS;
  rows = [
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'}
  ];
  tableOptions: any = {
    columns: [
      {name: 'First Name', prop: 'first_name', flex: 1, sortable: true, filtering: true},
      {name: 'Last Name', prop: 'last_name', flex: 1, sortable: true, filtering: true},
      {name: 'Address', prop: 'address', flex: 1, sortable: true, filtering: true},
      {name: 'Permission', cellTemplate: 'switcher', switcherOptions: [{label: 'Admin', value: 'admin'}, {label: 'User', value: 'user'}], flex: 1},
      {name: '', flex: 1, cellTemplate: 'actions', actions: ['delete']},
    ],
    fixedRow: {
      label : 'Just a fixed row with a select',
      noOptionsMessage: 'No Data',
      type: 'select',
      options: [
        {value: 'test1', label: 'Test Item'},
        {value: 'test2', label: 'Test Item 2'},
      ]
    }
  };

  constructor(
    private textHelper: TextHelper
  ) { }

  ngOnInit() {
    this.tableExampleTS = this.textHelper.dedent`
    rows = [
      {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
      {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
      {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
      {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
      {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
      {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
      {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'},
      {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
      {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'}
    ];
    tableOptions = {
      columns: [
        {name: 'First Name', prop: 'first_name', flex: 1, sortable: true, filtering: true},
        {name: 'Last Name', prop: 'last_name', flex: 1, sortable: true, filtering: true},
        {name: 'Address', prop: 'address', flex: 1, sortable: true, filtering: true},
        {name: 'Permission', cellTemplate: 'switcher', switcherOptions: [{label: 'Admin', value: 'admin'}, {label: 'User', value: 'user'}], flex: 1},
        {name: '', flex: 1, cellTemplate: 'actions', flex: 1, actions: ['delete']},
      ],
      fixedRow: {
        label : 'Just a fixed row with a select',
        noOptionsMessage: 'No Data',
        type: 'select',
        options: [
          {value: 'test1', label: 'Test Item'},
          {value: 'test2', label: 'Test Item 2'},
        ]
      }
    };
  `;
    this.tableExampleHTML = this.textHelper.dedent`
  <div class="container">
    <fj-table
      [rows]= "rows"
      [columns]="tableOptions.columns"
      [fixedRow]="tableOptions.fixedRow"
      [viewPort]="'350px'"
    >
      <fj-table-custom-column name="Custom" sortable="true" index="4" prop="first_name">
        <ng-template fj-table-header-template>
          <b>Custom:</b>
        </ng-template>
        <ng-template let-row="row" fj-table-cell-template>
          <b>{{row['first_name']}}</b>
        </ng-template>
      </fj-table-custom-column>
    </fj-table>
  `;
  }

}
