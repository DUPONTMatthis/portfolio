import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPartComponent } from './cv-part.component';

describe('CvPartComponent', () => {
  let component: CvPartComponent;
  let fixture: ComponentFixture<CvPartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvPartComponent]
    });
    fixture = TestBed.createComponent(CvPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
