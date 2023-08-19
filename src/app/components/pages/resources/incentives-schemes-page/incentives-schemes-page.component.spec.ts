import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentivesSchemesPageComponent } from './incentives-schemes-page.component';

describe('IncentivesSchemesPageComponent', () => {
  let component: IncentivesSchemesPageComponent;
  let fixture: ComponentFixture<IncentivesSchemesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [IncentivesSchemesPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(IncentivesSchemesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
