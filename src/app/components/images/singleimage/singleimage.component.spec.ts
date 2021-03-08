import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleimageComponent } from './singleimage.component';

describe('SingleimageComponent', () => {
  let component: SingleimageComponent;
  let fixture: ComponentFixture<SingleimageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
