import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegozioCardComponent } from './negozio-card.component';

describe('NegozioCardComponent', () => {
  let component: NegozioCardComponent;
  let fixture: ComponentFixture<NegozioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegozioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegozioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
