import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListInventoryComponent } from './list-inventory.component';

describe('ListInventoryComponent', () => {
  let component: ListInventoryComponent;
  let fixture: ComponentFixture<ListInventoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
