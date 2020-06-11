import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Card } from "src/app/decks/shared/card/card.model";

@Component({
  selector: "app-input-card",
  templateUrl: "./input-card.component.html",
  styleUrls: ["./input-card.component.scss"],
})
export class InputCardComponent implements OnInit {
  @Input()
  public card: Card;

  @Output()
  public removeEvent = new EventEmitter<Card>();

  constructor() {}

  public ngOnInit() {}

  public add(): void {
    if (this.card.amount < MAX) {
      this.card.amount++;
    }
  }

  public remove(): void {
    this.card.amount--;

    if (this.card.amount === 0) {
      this.removeEvent.emit(this.card);
    }
  }
}
const MAX = 4;
