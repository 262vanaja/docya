import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursclistComponent } from './nursclist.component';

describe('NursclistComponent', () => {
  let component: NursclistComponent;
  let fixture: ComponentFixture<NursclistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NursclistComponent]
    });
    fixture = TestBed.createComponent(NursclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
