import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventsPageComponent } from './news-events-page.component';

describe('NewsEventsPageComponent', () => {
  let component: NewsEventsPageComponent;
  let fixture: ComponentFixture<NewsEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NewsEventsPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NewsEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
