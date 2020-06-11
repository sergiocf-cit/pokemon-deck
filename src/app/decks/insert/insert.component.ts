import { Component, OnInit } from "@angular/core";
import { DeckService } from "../shared/deck/deck.service";
import { Card } from "../shared/card/card.model";
import { Deck } from "../shared/deck/deck.model";
import { DeckDatabaseService } from "../shared/deck/deck-database.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html",
  styleUrls: ["./insert.component.scss"],
})
export class InsertComponent implements OnInit {
  public cards: Card[];

  public myDeck: Deck;

  constructor(
    private deckService: DeckService,
    private deckDatabaseService: DeckDatabaseService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

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

  public saveDeck(): void {
    if (this.hasErrors()) {
      return;
    }

    this.deckDatabaseService.add(this.myDeck);
    this.router.navigate(["decks"]);
  }

  private initCards(): void {
    this.deckService.findAll().subscribe((cards) => (this.cards = cards));
  }

  private hasErrors(): boolean {
    if (this.deckDatabaseService.findByName(this.myDeck.name)) {
      this.openSnack("Deck name already exists");
      return true;
    }

    const numberOfCards = this.getNumberOfCards();

    if (numberOfCards < 24 || numberOfCards > 60) {
      this.openSnack(
        `Number of cards must be between 24 and 60. You have ${numberOfCards}`
      );
      return true;
    }

    const cardMoreThen4Cards = this.getCardsWithMoreThan4Repetition();

    if (cardMoreThen4Cards.length > 0) {
      this.openSnack(
        `Name cards with more than 4 cards: ${cardMoreThen4Cards}`
      );
      return true;
    }

    return false;
  }

  private getNumberOfCards(): number {
    return this.myDeck.cards
      .map((v) => v.amount)
      .reduce((previous, current) => previous + current, 0);
  }

  private getCardsWithMoreThan4Repetition(): string[] {
    const result = [];
    const uniqueNames = [
      ...new Set(this.myDeck.cards.map((card) => card.name)),
    ];

    uniqueNames.forEach((name) => {
      const numberOfCards = this.myDeck.cards
        .filter((v) => v.name === name)
        .map((v) => v.amount)
        .reduce((previous, current) => previous + current, 0);

      if (numberOfCards > MAX_NUMBER_CARD) {
        result.push(name);
      }
    });

    return result;
  }

  private openSnack(message: string): void {
    this.snackBar.open(message, "dimiss", {
      duration: 10000,

      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}

const MAX_NUMBER_CARD = 4;
