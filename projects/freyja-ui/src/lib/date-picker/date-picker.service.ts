
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Injectable()
export class DatePickerService {

  editProgramSartDate: any;
  editActivitySartDate: any;
  approvalStartDate: any;
  createMilestoneStartDate: any;
  programDirectEntryStartDate: any;
  getProgramDirectEntryCalendarStartDate: Subject<any> = new Subject<any>();
  getEditProgramCalendarStartDate: Subject<any> = new Subject<any>();
  getEditActivityCalendarStartDate: Subject<any> = new Subject<any>();
  getApprovalCalendarStartDate: Subject<any> = new Subject<any>();
  getCreateMilestoneCalendarStartDate: Subject<any> = new Subject<any>();

  constructor() { }

  //  Method set disableUntil Start date value until yesterday
  disableUntil(options) {
    const d: any = new Date();
    d.setDate(d.getDate() - 1);
    const copy = this.getCopyOfOptions(options);
    copy.disableUntil = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    const myOptions = copy;

    return myOptions;
  }

  // Returns copy of myOptions for the Date
  getCopyOfOptions(options): INgxMyDpOptions {
    return JSON.parse(JSON.stringify(options));
  }

  public getEndDateCalendar(date, options) {
    const myEndDateOptions = this.getCopyOfOptions(options);
    myEndDateOptions.disableUntil = date;
    myEndDateOptions.todayBtnTxt = 'End Date';
    return myEndDateOptions;
  }

  getStartDate(date, form): boolean {
    try {
      const formatedDate = {
        year: date.split('.')[2],
        month: date.split('.')[1],
        day: date.split('.')[0]
      };
      if (form === 'edit_program_form') {
        this.editProgramSartDate = formatedDate;
        this.getEditProgramCalendarStartDate.next(this.editProgramSartDate);
      }
      if (form === 'edit_activity_form') {
        this.editActivitySartDate = formatedDate;
        this.getEditActivityCalendarStartDate.next(this.editActivitySartDate);
      }
      if (form === 'approval_form') {
        this.approvalStartDate = formatedDate;
        this.getApprovalCalendarStartDate.next(this.approvalStartDate);
      }
      if (form === 'create_milestone_form') {
        this.createMilestoneStartDate = formatedDate;
        this.getCreateMilestoneCalendarStartDate.next(this.createMilestoneStartDate);
      }
      if (form === 'program_direct_entry_form') {
        this.programDirectEntryStartDate = formatedDate;
        this.getProgramDirectEntryCalendarStartDate.next(this.programDirectEntryStartDate);
      }

      return true;

    } catch (error) {
      return false;
    }
  }
}
