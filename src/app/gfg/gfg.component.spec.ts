import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfgComponent } from './gfg.component';

describe('GfgComponent', () => {
  let component: GfgComponent;
  let fixture: ComponentFixture<GfgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GfgComponent]
    });
    fixture = TestBed.createComponent(GfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
