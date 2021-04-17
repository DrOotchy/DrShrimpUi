import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvItemViewComponent } from './list-inv-item-view.component';

describe('ListInvItemViewComponent', () => {
  let component: ListInvItemViewComponent;
  let fixture: ComponentFixture<ListInvItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInvItemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInvItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
