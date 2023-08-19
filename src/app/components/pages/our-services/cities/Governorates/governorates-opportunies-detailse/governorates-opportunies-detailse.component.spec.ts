import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernoratesOpportuniesDetailseComponent } from './governorates-opportunies-detailse.component';

describe('GovernoratesOpportuniesDetailseComponent', () => {
  let component: GovernoratesOpportuniesDetailseComponent;
  let fixture: ComponentFixture<GovernoratesOpportuniesDetailseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GovernoratesOpportuniesDetailseComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GovernoratesOpportuniesDetailseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
