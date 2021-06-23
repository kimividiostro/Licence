import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceRenewComponent } from './licence-renew.component';

describe('LicenceRenewComponent', () => {
  let component: LicenceRenewComponent;
  let fixture: ComponentFixture<LicenceRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenceRenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
