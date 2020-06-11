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
  private decks: Deck[];

  constructor(
    private deckDatabaseService: DeckDatabaseService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.initDecks();
  }

  public deleteItem(name: string): void {
    this.deckDatabaseService.remove(name);
    this.decks = this.decks.filter((i) => i.name !== name);
  }

  public goToLink(): void {
    this.router.navigate(["decks/insert"]);
  }

  private initDecks() {
    this.decks = this.deckDatabaseService.findAll();
  }

  public search(value: string): void {
    this.decks = this.deckDatabaseService.findByName(value);
  }
}
