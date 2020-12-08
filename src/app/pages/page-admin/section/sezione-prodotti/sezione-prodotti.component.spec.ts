import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneProdottiComponent } from './sezione-prodotti.component';

describe('SezioneProdottiComponent', () => {
  let component: SezioneProdottiComponent;
  let fixture: ComponentFixture<SezioneProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneProdottiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezioneProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
