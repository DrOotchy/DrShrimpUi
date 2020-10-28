import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleimageComponent } from './singleimage.component';

describe('SingleimageComponent', () => {
  let component: SingleimageComponent;
  let fixture: ComponentFixture<SingleimageComponent>;

  beforeEach(async(() => {
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
