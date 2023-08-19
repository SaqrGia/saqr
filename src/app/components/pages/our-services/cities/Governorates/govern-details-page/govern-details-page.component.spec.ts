import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernDetailsPageComponent } from './govern-details-page.component';

describe('GovernDetailsPageComponent', () => {
  let component: GovernDetailsPageComponent;
  let fixture: ComponentFixture<GovernDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GovernDetailsPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GovernDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
