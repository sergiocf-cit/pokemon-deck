import { TestBed } from "@angular/core/testing";

import { DeckDatabaseService } from "./deck-database.service";

describe("DeckDatabaseService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DeckDatabaseService = TestBed.get(DeckDatabaseService);
    expect(service).toBeTruthy();
  });

  it("should be created", () => {
    const service: DeckDatabaseService = TestBed.get(DeckDatabaseService);
    const deck = { name: "test name", cards: [] };
    service.add(deck);

    expect(service.filterByName("name")).toEqual([deck]);
  });
});
