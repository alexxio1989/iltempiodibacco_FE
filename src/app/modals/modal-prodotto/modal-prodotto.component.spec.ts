import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProdottoComponent } from './modal-prodotto.component';

describe('ModalProdottoComponent', () => {
  let component: ModalProdottoComponent;
  let fixture: ComponentFixture<ModalProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProdottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
