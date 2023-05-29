import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpresriptionComponent } from './viewpresription.component';

describe('ViewpresriptionComponent', () => {
  let component: ViewpresriptionComponent;
  let fixture: ComponentFixture<ViewpresriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpresriptionComponent]
    });
    fixture = TestBed.createComponent(ViewpresriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
