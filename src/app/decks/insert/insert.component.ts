import { Component, OnInit } from "@angular/core";
import { DeckService } from "../shared/deck/deck.service";
import { Card } from "../shared/card/card.model";
import { Deck } from "../shared/deck/deck.model";

@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html",
  styleUrls: ["./insert.component.scss"],
})
export class InsertComponent implements OnInit {
  public cards: Card[];

  public myDeck: Deck;

  constructor(private deckService: DeckService) {}

  public ngOnInit() {
    this.initCards();
    this.myDeck = { cards: [], name: "" };
  }

  public search(value: string): void {
    this.deckService
      .findByName(value)
      .subscribe((cards) => (this.cards = cards));
  }

  public addCard(card: Card): void {
    if (!this.myDeck.cards.find((v) => v.id === card.id)) {
      card.amount = 1;
      this.myDeck.cards.push(card);
    }
  }

  public removeCard(card: Card): void {
    this.myDeck.cards = this.myDeck.cards.filter((v) => v.id !== card.id);
  }

  private initCards(): void {
    this.deckService.findAll().subscribe((cards) => (this.cards = cards));
  }
}
