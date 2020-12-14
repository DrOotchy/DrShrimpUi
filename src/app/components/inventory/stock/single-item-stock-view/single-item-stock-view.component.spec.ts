import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemStockViewComponent } from './single-item-stock-view.component';

describe('SingleItemStockViewComponent', () => {
  let component: SingleItemStockViewComponent;
  let fixture: ComponentFixture<SingleItemStockViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleItemStockViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
