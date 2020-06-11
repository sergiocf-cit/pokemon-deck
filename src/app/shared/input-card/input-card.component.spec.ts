import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InputCardComponent } from "./input-card.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SuperType } from "src/app/decks/shared/card/super-type.enum";

describe("InputCardComponent", () => {
  let component: InputCardComponent;
  let fixture: ComponentFixture<InputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCardComponent);
    component = fixture.componentInstance;
    component.card = {
      supertype: SuperType.Pokémon,
      name: "name",
      imageUrl: "url",
      id: "1",
      types: [],
      amount: 1,
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
