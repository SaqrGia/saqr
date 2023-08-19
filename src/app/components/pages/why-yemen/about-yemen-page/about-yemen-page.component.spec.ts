import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYemenPageComponent } from './about-yemen-page.component';

describe('AboutYemenPageComponent', () => {
  let component: AboutYemenPageComponent;
  let fixture: ComponentFixture<AboutYemenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AboutYemenPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AboutYemenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
