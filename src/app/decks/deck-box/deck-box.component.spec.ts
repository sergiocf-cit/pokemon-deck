import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBoxComponent } from './deck-box.component';

describe('DeckBoxComponent', () => {
  let component: DeckBoxComponent;
  let fixture: ComponentFixture<DeckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
