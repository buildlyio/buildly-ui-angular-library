import { Component, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IMyDateModel, INgxMyDpOptions, IMyDefaultMonth, NgxMyDatePickerDirective } from 'ngx-mydatepicker';
import * as moment_ from 'moment';
import {BaseComponent} from '../../lib/shared/base.component';

const moment = moment_;
@Component({
  selector: 'fj-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent extends BaseComponent implements OnInit {
  // public currentOptions: DatePickerOptions;
  @Input() labelText = '';
  @Input() formGroup: FormGroup;
  @Input() controlName = '';
  @Input() inputPlaceholder = '';
  @Input() id: string;
  @Input() errors = '';
  @Input() options: any = {};
  @Input() disabled = false;
  @Input() icon = true;
  @Input() border = true;
  @Input() padding = true;
  @Input() formOfOrigin: string;
  @Input() timePicker = false;
  @Input() timeLabel = 'Time';
  @Input() required = false;
  /**
   * Error Message to be displayed
   */
  @Input() error: string;  @Input() dateTime: any = null;
  @Input() fileCreateDate: any;
  /**
   * custom styles object for the input
   */
  @Input() customStyles;
  /**
   * To Apply forceful error state to input component
   */
  @Input() errored = false;
  @ViewChild('dp') ngxdp: NgxMyDatePickerDirective;

  public date: string;
  public timePickerToggle = true;
  public dateIsOpen = false;
  public timeFocus = false;

  @Input() myDefaultMonth: IMyDefaultMonth;
  @Input() myOptions: INgxMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };
  @Output() dateChangeValue: EventEmitter<any> = new EventEmitter();
  @Output() dateChangeEvent: EventEmitter<any> = new EventEmitter();


  constructor() {
    super();
  }

  ngOnInit() {
    this.Date = this.formGroup.value[`${this.controlName}`];
  }

  /**
   * called from the host click, toggles the date picker and prevents picker hiding when clicked on the header elements
   * @param evt - mouse event
   */
  public toggleCalendar(evt) {
    evt.stopPropagation();
    if (this.disabled) {
      return;
    }
    this.ngxdp.toggleCalendar();
    const elem = document.querySelector('ngx-my-date-picker .header');
    if (elem) {
      elem.addEventListener('click', (event) => event.stopPropagation());
    }
  }

  /**
   * @description Fires when the date field change.
   * @param event IMDateModel - structured datetime.
   */
  onDateChanged(event: IMyDateModel): void {
    if (event.jsdate) {
      this.Date = event.jsdate.toString();
    } else {
      this.Date = '';
    }
    // emit date change event to parent with true value
    this.dateChangeEvent.emit(true);
    // emit date change event to parent with event
    this.dateChangeValue.emit(event);
  }

  // clear the date of the date picker;
  clearDate(): void {
    this.ngxdp.clearDate();
    this.timePickerToggle = true;
    this.formGroup.controls[`${this.controlName}`].setValue(null);
  }

  calendarToggle(event) {
    this.dateIsOpen = event === 1;
  }

  /**
   * @public Date
   * @type {string}
   * @method get
   * @description gets the date part of this.dateTime as a formatted string.
   * @returns {string} - formatted date or empty string if no this.dateTime.
   */
  public get Date() {
    if (this.dateTime) {
      if (this.timePicker) {
        this.timePickerToggle = false;
      }
      return moment(this.dateTime).format('DD.MM.YYYY');
    } else {
      if (this.timePicker) {
        this.timePickerToggle = true;
      }
      return '';
    }
  }

  /**
   * @public Date
   * @type {date}
   * @method set
   * @description sets the datetime to the form.
   * @param {string} datetime - string of formatted DATE part of a datetime.
   */
  public set Date(datetime) {
    if (!datetime) {
      this.dateTime = '';
      if (this.timePicker) {
        this.timePickerToggle = true;
      }
    } else {
        this.dateTime = new Date(datetime);
      this.formGroup.controls[`${this.controlName}`].setValue(this.dateTime);
    }
  }

  /**
   * Generate classes using BEM appraoch and bind to ngClass
   */
  public generateClassList() {
    const classes = {
      ['fj-input--' + this.size]: this.size,
      ['fj-input--required']: this.required,
      ['fj-input--error']: this.errored,
    };
    return classes;
  }
}
