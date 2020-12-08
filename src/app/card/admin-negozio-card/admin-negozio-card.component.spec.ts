import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNegozioCardComponent } from './admin-negozio-card.component';

describe('AdminNegozioCardComponent', () => {
  let component: AdminNegozioCardComponent;
  let fixture: ComponentFixture<AdminNegozioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNegozioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNegozioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
