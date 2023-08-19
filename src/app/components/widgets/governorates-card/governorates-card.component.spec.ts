import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernoratesCardComponent } from './governorates-card.component';

describe('GovernoratesCardComponent', () => {
  let component: GovernoratesCardComponent;
  let fixture: ComponentFixture<GovernoratesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GovernoratesCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GovernoratesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
