import { TestBed } from "@angular/core/testing";

import { DeckService } from "./deck.service";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { of } from "rxjs";

describe("DeckService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DeckService = TestBed.get(DeckService);
    expect(service).toBeTruthy();
  });

  it("should parse data properly", () => {
    const cards: PokemonTCG.Card[] = [];

    cards.push({
      id: "1",
      name: "name",
      imageUrl: "imageUrl",
      supertype: "Pokémon",
      types: [],
    } as PokemonTCG.Card);

    const service: DeckService = TestBed.get(DeckService);

    spyOn(PokemonTCG.Card, "all").and.returnValue(of(cards).toPromise());

    service.findAll().subscribe((v) => {
      expect(v[0].id).toEqual("1");
      expect(v[0].name).toEqual("name");
      expect(v[0].imageUrl).toEqual("imageUrl");
      expect(v[0].supertype).toEqual("Pokémon");
    });
  });
});
