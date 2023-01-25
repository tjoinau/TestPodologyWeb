import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsHoursComponent } from './consultations-hours.component';

describe('ConsultationsHoursComponent', () => {
  let component: ConsultationsHoursComponent;
  let fixture: ComponentFixture<ConsultationsHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationsHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationsHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
