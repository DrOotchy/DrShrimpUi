import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddCompetitorComponent } from './add-competitor.component';

describe('AddCompetitorComponent', () => {
  let component: AddCompetitorComponent;
  let fixture: ComponentFixture<AddCompetitorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompetitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
