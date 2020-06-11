import { Component, OnInit } from "@angular/core";
import { DeckService } from "../shared/deck/deck.service";
import { Card } from "../shared/card/card.model";

@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html",
  styleUrls: ["./insert.component.scss"],
})
export class InsertComponent implements OnInit {
  public cards: Card[];

  constructor(private deckService: DeckService) {}

  public ngOnInit() {
    this.initCards();
  }

  public search(value: string): void {
    this.deckService.findAll().subscribe((cards) => console.log(cards));
  }

  private initCards(): void {
    this.deckService.findAll().subscribe((cards) => (this.cards = cards));
  }
}
