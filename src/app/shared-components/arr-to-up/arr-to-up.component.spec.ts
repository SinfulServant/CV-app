import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrToUpComponent } from './arr-to-up.component';

describe('ArrToUpComponent', () => {
  let component: ArrToUpComponent;
  let fixture: ComponentFixture<ArrToUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrToUpComponent]
    });
    fixture = TestBed.createComponent(ArrToUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
