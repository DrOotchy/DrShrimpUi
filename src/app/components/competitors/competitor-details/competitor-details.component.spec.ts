import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompetitorDetailsComponent } from './competitor-details.component';

describe('CompetitorDetailsComponent', () => {
  let component: CompetitorDetailsComponent;
  let fixture: ComponentFixture<CompetitorDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
