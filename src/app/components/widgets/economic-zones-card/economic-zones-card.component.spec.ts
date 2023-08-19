import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicZonesCardComponent } from './economic-zones-card.component';

describe('EconomicZonesCardComponent', () => {
  let component: EconomicZonesCardComponent;
  let fixture: ComponentFixture<EconomicZonesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EconomicZonesCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EconomicZonesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
