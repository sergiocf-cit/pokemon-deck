import { Injectable } from "@angular/core";
import { Deck } from "./deck.model";

@Injectable({
  providedIn: "root",
})
export class DeckDatabaseService {
  private decks: Deck[] = [];

  constructor() {
    this.initDeckList();
  }

  public add(deck: Deck) {
    this.decks.push(deck);
  }

  public remove(name: string) {
    this.decks = this.decks.filter((deck) => deck.name !== name);
  }

  public findAll(): Deck[] {
    return this.decks;
  }

  public findByName(name: string): Deck[] {
    return this.decks.filter((deck) => deck.name.includes(name) || name === "");
  }

  private initDeckList(): void {
    this.decks = [
      {
        name: "Picachu Deck",
        cards: [],
      },
      {
        name: "Raio Deck",
        cards: [],
      },
    ];
  }
}