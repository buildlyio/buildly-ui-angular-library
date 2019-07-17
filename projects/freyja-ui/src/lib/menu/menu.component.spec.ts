import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('open', () => {
    it('should set isOpen is true', () => {
      (component as any).open();
      expect(component.isOpen).toBe(true);
    });
  });

  describe('close', () => {
    it('should set isOpen to false', () => {
      (component as any).close();
      expect(component.isOpen).toBe(false);
    });
  });
});
