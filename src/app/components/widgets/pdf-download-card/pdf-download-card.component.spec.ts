import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDownloadCardComponent } from './pdf-download-card.component';

describe('PdfDownloadCardComponent', () => {
  let component: PdfDownloadCardComponent;
  let fixture: ComponentFixture<PdfDownloadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PdfDownloadCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PdfDownloadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
