import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePackagePageComponent } from './service-package-page.component';

describe('ServicePackagePageComponent', () => {
  let component: ServicePackagePageComponent;
  let fixture: ComponentFixture<ServicePackagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ServicePackagePageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ServicePackagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
