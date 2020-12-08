import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoCardComponent } from './prodotto-card.component';

describe('ProdottoCardComponent', () => {
  let component: ProdottoCardComponent;
  let fixture: ComponentFixture<ProdottoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
