import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestGuideBoxComponent } from './invest-guide-box.component';

describe('InvestGuideBoxComponent', () => {
  let component: InvestGuideBoxComponent;
  let fixture: ComponentFixture<InvestGuideBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [InvestGuideBoxComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(InvestGuideBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
