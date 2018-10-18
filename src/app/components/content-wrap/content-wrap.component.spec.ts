import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWrapComponent } from './content-wrap.component';

describe('ContentWrapComponent', () => {
  let component: ContentWrapComponent;
  let fixture: ComponentFixture<ContentWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
