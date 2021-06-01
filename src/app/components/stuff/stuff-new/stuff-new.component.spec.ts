import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffNewComponent } from './stuff-new.component';

describe('StuffNewComponent', () => {
  let component: StuffNewComponent;
  let fixture: ComponentFixture<StuffNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
