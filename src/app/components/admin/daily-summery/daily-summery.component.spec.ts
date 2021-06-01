import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySummeryComponent } from './daily-summery.component';

describe('DailySummeryComponent', () => {
  let component: DailySummeryComponent;
  let fixture: ComponentFixture<DailySummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
