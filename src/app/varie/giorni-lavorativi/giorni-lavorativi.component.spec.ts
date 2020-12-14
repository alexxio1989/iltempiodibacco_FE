import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiorniLavorativiComponent } from './giorni-lavorativi.component';

describe('GiorniLavorativiComponent', () => {
  let component: GiorniLavorativiComponent;
  let fixture: ComponentFixture<GiorniLavorativiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiorniLavorativiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiorniLavorativiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
