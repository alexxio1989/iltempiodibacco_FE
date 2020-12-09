import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNegozioModalContentComponent } from './new-negozio-modal-content.component';

describe('NewNegozioModalContentComponent', () => {
  let component: NewNegozioModalContentComponent;
  let fixture: ComponentFixture<NewNegozioModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNegozioModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNegozioModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
