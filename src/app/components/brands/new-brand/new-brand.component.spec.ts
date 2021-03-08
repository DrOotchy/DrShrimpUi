import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewBrandComponent } from './new-brand.component';

describe('NewBrandComponent', () => {
  let component: NewBrandComponent;
  let fixture: ComponentFixture<NewBrandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
