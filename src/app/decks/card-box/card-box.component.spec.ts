import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardBoxComponent } from "./card-box.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SuperType } from "../shared/card/super-type.enum";

describe("CardBoxComponent", () => {
  let component: CardBoxComponent;
  let fixture: ComponentFixture<CardBoxComponent>;

  const card = {
    name: "test card",
    imageUrl: "url",
    id: "1",
    supertype: SuperType.Pokémon,
    types: [],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardBoxComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoxComponent);
    component = fixture.componentInstance;

    component.card = card;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit value", () => {
    const emitSpy = spyOn<any>(component.addEvent, "emit");

    component.add();

    expect(emitSpy).toHaveBeenCalledWith(card);
  });
});
