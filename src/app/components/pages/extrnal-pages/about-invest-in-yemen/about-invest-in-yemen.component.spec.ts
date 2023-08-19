import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInvestInYemenComponent } from './about-invest-in-yemen.component';

describe('AboutInvestInYemenComponent', () => {
  let component: AboutInvestInYemenComponent;
  let fixture: ComponentFixture<AboutInvestInYemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AboutInvestInYemenComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AboutInvestInYemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
