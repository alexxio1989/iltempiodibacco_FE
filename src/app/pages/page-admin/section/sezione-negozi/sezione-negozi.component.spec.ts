import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneNegoziComponent } from './sezione-negozi.component';

describe('SezioneNegoziComponent', () => {
  let component: SezioneNegoziComponent;
  let fixture: ComponentFixture<SezioneNegoziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneNegoziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezioneNegoziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
