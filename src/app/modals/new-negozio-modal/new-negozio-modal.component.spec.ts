import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNegozioModalComponent } from './new-negozio-modal.component';

describe('NewNegozioModalComponent', () => {
  let component: NewNegozioModalComponent;
  let fixture: ComponentFixture<NewNegozioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNegozioModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNegozioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
