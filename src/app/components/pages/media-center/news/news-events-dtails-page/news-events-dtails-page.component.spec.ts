import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventsDtailsPageComponent } from './news-events-dtails-page.component';

describe('NewsEventsDtailsPageComponent', () => {
  let component: NewsEventsDtailsPageComponent;
  let fixture: ComponentFixture<NewsEventsDtailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NewsEventsDtailsPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NewsEventsDtailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
