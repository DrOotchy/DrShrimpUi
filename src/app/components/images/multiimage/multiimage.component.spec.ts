import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiimageComponent } from './multiimage.component';

describe('MultiimageComponent', () => {
  let component: MultiimageComponent;
  let fixture: ComponentFixture<MultiimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
