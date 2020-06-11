import { Injectable } from "@angular/core";
import { Deck } from "./deck.model";

@Injectable({
  providedIn: "root",
})
export class DeckDatabaseService {
  private decks: Deck[] = [];

  constructor() {}

  public add(deck: Deck) {
    this.decks.push(deck);
  }

  public remove(deck: Deck) {
    this.decks = this.decks.filter((v) => v.name !== deck.name);
  }

  public findAll(): Deck[] {
    return this.decks;
  }

  public filterByName(name: string): Deck[] {
    return this.decks.filter((deck) => deck.name.includes(name) || name === "");
  }

  public findByName(name: string): Deck {
    return this.decks.find((deck) => deck.name === name);
  }
}
