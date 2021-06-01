import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffdetailsComponent } from './stuffdetails.component';

describe('StuffdetailsComponent', () => {
  let component: StuffdetailsComponent;
  let fixture: ComponentFixture<StuffdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
