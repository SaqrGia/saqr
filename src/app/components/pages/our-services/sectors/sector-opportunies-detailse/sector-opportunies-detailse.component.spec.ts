import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorOpportuniesDetailseComponent } from './sector-opportunies-detailse.component';

describe('SectorOpportuniesDetailseComponent', () => {
  let component: SectorOpportuniesDetailseComponent;
  let fixture: ComponentFixture<SectorOpportuniesDetailseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectorOpportuniesDetailseComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectorOpportuniesDetailseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
