import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonQuestionsPageComponent } from './common-questions-page.component';

describe('CommonQuestionsPageComponent', () => {
  let component: CommonQuestionsPageComponent;
  let fixture: ComponentFixture<CommonQuestionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CommonQuestionsPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CommonQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
