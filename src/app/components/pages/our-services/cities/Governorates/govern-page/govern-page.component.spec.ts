import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernPageComponent } from './govern-page.component';

describe('GovernPageComponent', () => {
  let component: GovernPageComponent;
  let fixture: ComponentFixture<GovernPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GovernPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GovernPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
