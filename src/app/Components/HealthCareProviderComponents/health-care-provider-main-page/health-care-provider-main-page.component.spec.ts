import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareProviderMainPageComponent } from './health-care-provider-main-page.component';

describe('HealthCareProviderMainPageComponent', () => {
  let component: HealthCareProviderMainPageComponent;
  let fixture: ComponentFixture<HealthCareProviderMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCareProviderMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCareProviderMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
