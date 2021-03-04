import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTempComponent } from './list-temp.component';

describe('ListTempComponent', () => {
  let component: ListTempComponent;
  let fixture: ComponentFixture<ListTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
