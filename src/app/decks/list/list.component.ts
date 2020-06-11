import { Component, OnInit } from "@angular/core";
import { Deck } from "../shared/deck/deck.model";
import { DeckDatabaseService } from "../shared/deck/deck-database.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public decks: Deck[];

  constructor(
    private deckDatabaseService: DeckDatabaseService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.initDecks();
  }

  public deleteItem(deck: Deck): void {
    this.deckDatabaseService.remove(name);
    this.decks = this.decks.filter((i) => i.name !== deck.name);
  }

  public goToLink(): void {
    this.router.navigate(["decks/insert"]);
  }

  private initDecks() {
    this.decks = this.deckDatabaseService.findAll();
  }

  public search(value: string): void {
    this.decks = this.deckDatabaseService.filterByName(value);
  }
}
