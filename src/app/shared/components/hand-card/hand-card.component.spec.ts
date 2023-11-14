import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandCardComponent } from './hand-card.component';

describe('HandCardComponent', () => {
  let component: HandCardComponent;
  let fixture: ComponentFixture<HandCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandCardComponent]
    });
    fixture = TestBed.createComponent(HandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
