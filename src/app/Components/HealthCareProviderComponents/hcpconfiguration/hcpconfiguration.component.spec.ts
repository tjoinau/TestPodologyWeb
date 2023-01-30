import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HCPConfigurationComponent } from './hcpconfiguration.component';

describe('HCPConfigurationComponent', () => {
  let component: HCPConfigurationComponent;
  let fixture: ComponentFixture<HCPConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HCPConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HCPConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
