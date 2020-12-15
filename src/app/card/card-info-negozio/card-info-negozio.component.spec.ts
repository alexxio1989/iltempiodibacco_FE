import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoNegozioComponent } from './card-info-negozio.component';

describe('CardInfoNegozioComponent', () => {
  let component: CardInfoNegozioComponent;
  let fixture: ComponentFixture<CardInfoNegozioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfoNegozioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoNegozioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
