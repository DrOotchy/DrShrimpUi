import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffAttendanceComponent } from './stuff-attendance.component';

describe('StuffAttendanceComponent', () => {
  let component: StuffAttendanceComponent;
  let fixture: ComponentFixture<StuffAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
