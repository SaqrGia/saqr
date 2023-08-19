import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyOfficeCardComponent } from './agency-office-card.component';

describe('AgencyOfficeCardComponent', () => {
  let component: AgencyOfficeCardComponent;
  let fixture: ComponentFixture<AgencyOfficeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AgencyOfficeCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AgencyOfficeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
