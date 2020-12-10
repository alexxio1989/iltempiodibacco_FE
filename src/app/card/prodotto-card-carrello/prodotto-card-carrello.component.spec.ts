import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoCardCarrelloComponent } from './prodotto-card-carrello.component';

describe('ProdottoCardCarrelloComponent', () => {
  let component: ProdottoCardCarrelloComponent;
  let fixture: ComponentFixture<ProdottoCardCarrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoCardCarrelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoCardCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
