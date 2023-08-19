import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicZonesDetailsPageComponent } from './economic-zones-details-page.component';

describe('EconomicZonesDetailsPageComponent', () => {
  let component: EconomicZonesDetailsPageComponent;
  let fixture: ComponentFixture<EconomicZonesDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EconomicZonesDetailsPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EconomicZonesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
