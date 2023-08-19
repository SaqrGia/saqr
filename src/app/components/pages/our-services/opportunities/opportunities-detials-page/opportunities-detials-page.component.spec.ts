import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesDetialsPageComponent } from './opportunities-detials-page.component';

describe('OpportunitiesDetialsPageComponent', () => {
  let component: OpportunitiesDetialsPageComponent;
  let fixture: ComponentFixture<OpportunitiesDetialsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [OpportunitiesDetialsPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(OpportunitiesDetialsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
