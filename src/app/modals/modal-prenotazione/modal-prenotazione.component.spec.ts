import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrenotazioneComponent } from './modal-prenotazione.component';

describe('ModalPrenotazioneComponent', () => {
  let component: ModalPrenotazioneComponent;
  let fixture: ComponentFixture<ModalPrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrenotazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
