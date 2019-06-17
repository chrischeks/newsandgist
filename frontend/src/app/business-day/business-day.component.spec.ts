import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDayComponent } from './business-day.component';

describe('BusinessDayComponent', () => {
  let component: BusinessDayComponent;
  let fixture: ComponentFixture<BusinessDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
