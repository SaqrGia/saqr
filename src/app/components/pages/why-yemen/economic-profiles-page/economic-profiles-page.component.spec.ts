import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicProfilesPageComponent } from './economic-profiles-page.component';

describe('EconomicProfilesPageComponent', () => {
  let component: EconomicProfilesPageComponent;
  let fixture: ComponentFixture<EconomicProfilesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EconomicProfilesPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EconomicProfilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
