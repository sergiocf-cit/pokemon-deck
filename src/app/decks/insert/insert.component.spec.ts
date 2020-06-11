import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InsertComponent } from "./insert.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DeckDatabaseService } from "../shared/deck/deck-database.service";
import { SuperType } from "../shared/card/super-type.enum";

describe("InsertComponent", () => {
  let component: InsertComponent;
  let fixture: ComponentFixture<InsertComponent>;

  let deckDatabaseService: DeckDatabaseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, MatSnackBarModule],
      declarations: [InsertComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertComponent);
    component = fixture.componentInstance;
    deckDatabaseService = TestBed.get(DeckDatabaseService);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show duplicated name message", () => {
    const openSpy = spyOn(component["snackBar"], "open");

    deckDatabaseService.add({ name: "test", cards: [] });
    component.myDeck = { name: "test", cards: [] };

    component.saveDeck();

    expect(openSpy).toHaveBeenCalledWith(
      "Deck name already exists",
      "dimiss",
      Object({
        duration: 10000,
        horizontalPosition: "center",
        verticalPosition: "top",
      })
    );
  });

  it("should show number of cards message", () => {
    const openSpy = spyOn(component["snackBar"], "open");

    deckDatabaseService.add({ name: "test", cards: [] });
    component.myDeck = { name: "test1", cards: [] };

    component.saveDeck();

    expect(openSpy).toHaveBeenCalledWith(
      "Number of cards must be between 24 and 60. You have 0",
      "dimiss",
      Object({
        duration: 10000,
        horizontalPosition: "center",
        verticalPosition: "top",
      })
    );
  });

  it("should show distinc number of cards message", () => {
    const openSpy = spyOn(component["snackBar"], "open");

    deckDatabaseService.add({ name: "test", cards: [] });
    component.myDeck = {
      name: "test1",
      cards: [
        {
          name: "x1",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 24,
        },

        {
          name: "x2",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 1,
        },

        {
          name: "x2",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 4,
        },
      ],
    };

    component.saveDeck();

    expect(openSpy).toHaveBeenCalledWith(
      "Name cards with more than 4 cards: x1,x2",
      "dimiss",
      Object({
        duration: 10000,
        horizontalPosition: "center",
        verticalPosition: "top",
      })
    );
  });

  it("should save with success", () => {
    const routerSpy = spyOn(component["router"], "navigate");

    deckDatabaseService.add({ name: "test", cards: [] });
    component.myDeck = {
      name: "test1",
      cards: [
        {
          name: "x1",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 4,
        },

        {
          name: "x2",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 4,
        },

        {
          name: "x3",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 4,
        },

        {
          name: "x4",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 4,
        },

        {
          name: "x5",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 4,
        },

        {
          name: "x6",
          types: [],
          supertype: SuperType.Pokémon,
          id: "1",
          imageUrl: "url",
          amount: 4,
        },
      ],
    };

    component.saveDeck();

    expect(routerSpy).toHaveBeenCalledWith(["decks"]);
  });
});
