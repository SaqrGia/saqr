import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentGuidePageComponent } from './investment-guide-page.component';

describe('InvestmentGuidePageComponent', () => {
  let component: InvestmentGuidePageComponent;
  let fixture: ComponentFixture<InvestmentGuidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [InvestmentGuidePageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentGuidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
