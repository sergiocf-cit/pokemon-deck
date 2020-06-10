import { TestBed } from "@angular/core/testing";

import { DeckDatabaseService } from "./deck-database.service";

describe("DeckDatabaseService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DeckDatabaseService = TestBed.get(DeckDatabaseService);
    expect(service).toBeTruthy();
  });
});
