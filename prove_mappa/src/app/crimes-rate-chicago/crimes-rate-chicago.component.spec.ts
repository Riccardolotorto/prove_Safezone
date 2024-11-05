import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimesRateChicagoComponent } from './crimes-rate-chicago.component';

describe('CrimesRateChicagoComponent', () => {
  let component: CrimesRateChicagoComponent;
  let fixture: ComponentFixture<CrimesRateChicagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrimesRateChicagoComponent]
    });
    fixture = TestBed.createComponent(CrimesRateChicagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
