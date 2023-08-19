import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsCardComponent } from './sectors-card.component';

describe('SectorsCardComponent', () => {
  let component: SectorsCardComponent;
  let fixture: ComponentFixture<SectorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectorsCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
