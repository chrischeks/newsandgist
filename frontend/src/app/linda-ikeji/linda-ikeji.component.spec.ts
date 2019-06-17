import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LindaIkejiComponent } from './linda-ikeji.component';

describe('LindaIkejiComponent', () => {
  let component: LindaIkejiComponent;
  let fixture: ComponentFixture<LindaIkejiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LindaIkejiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LindaIkejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
