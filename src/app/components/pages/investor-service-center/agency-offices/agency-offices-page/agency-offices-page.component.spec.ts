import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyOfficesPageComponent } from './agency-offices-page.component';

describe('AgencyOfficesPageComponent', () => {
  let component: AgencyOfficesPageComponent;
  let fixture: ComponentFixture<AgencyOfficesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AgencyOfficesPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AgencyOfficesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
