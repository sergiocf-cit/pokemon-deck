import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";

import { DetailComponent } from "./detail.component";
import { RouterTestingModule } from "@angular/router/testing";
import { DeckDatabaseService } from "../shared/deck/deck-database.service";
import { Deck } from "../shared/deck/deck.model";
import { SuperType } from "../shared/card/super-type.enum";

describe("DetailComponent", () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let deck: Deck;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DetailComponent],
      providers: [
        {
          provide: DeckDatabaseService,
          useValue: {
            findByName(name: string): Deck {
              {
                return deck;
              }
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;

    deck = { name: "Deck", cards: [] };

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should sumarize pokemons", fakeAsync(() => {
    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "1",
      supertype: SuperType.Pokémon,
      types: [],
    });

    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "2",
      supertype: SuperType.Pokémon,
      types: [],
    });

    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "3",
      supertype: SuperType.Trainer,
      types: [],
    });

    component.ngOnInit();

    tick();

    expect(component.numberOfPokemons).toEqual(2);
  }));

  it("should sumarize trainers", fakeAsync(() => {
    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "1",
      supertype: SuperType.Pokémon,
      types: [],
    });

    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "2",
      supertype: SuperType.Trainer,
      types: [],
    });

    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "3",
      supertype: SuperType.Trainer,
      types: [],
    });

    component.ngOnInit();

    tick();

    expect(component.numberOfTrainers).toEqual(2);
  }));

  it("should sumarize energy", fakeAsync(() => {
    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "1",
      supertype: SuperType.Energy,
      types: [],
    });

    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "2",
      supertype: SuperType.Energy,
      types: [],
    });

    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "3",
      supertype: SuperType.Trainer,
      types: [],
    });

    component.ngOnInit();

    tick();

    expect(component.numberOfEnergys).toEqual(2);
  }));

  it("should sumarize unique types", fakeAsync(() => {
    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "1",
      supertype: SuperType.Energy,
      types: ["Fire", "Fighting"],
    });

    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "2",
      supertype: SuperType.Energy,
      types: ["Fire"],
    });

    deck.cards.push({
      name: "test card",
      imageUrl: "url",
      id: "3",
      supertype: SuperType.Trainer,
      types: ["Psychic", "Fighting"],
    });

    component.ngOnInit();

    tick();

    expect(component.numberOfTypes).toEqual(3);
  }));
});
