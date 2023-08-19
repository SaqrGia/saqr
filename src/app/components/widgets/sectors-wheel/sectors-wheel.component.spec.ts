import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsWheelComponent } from './sectors-wheel.component';

describe('SectorsWheelComponent', () => {
  let component: SectorsWheelComponent;
  let fixture: ComponentFixture<SectorsWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectorsWheelComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectorsWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
