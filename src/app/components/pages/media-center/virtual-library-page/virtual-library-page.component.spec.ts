import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualLibraryPageComponent } from './virtual-library-page.component';

describe('VirtualLibraryPageComponent', () => {
  let component: VirtualLibraryPageComponent;
  let fixture: ComponentFixture<VirtualLibraryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [VirtualLibraryPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(VirtualLibraryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
