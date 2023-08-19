import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicZonesPageComponent } from './economic-zones-page.component';

describe('EconomicZonesPageComponent', () => {
  let component: EconomicZonesPageComponent;
  let fixture: ComponentFixture<EconomicZonesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EconomicZonesPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EconomicZonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
