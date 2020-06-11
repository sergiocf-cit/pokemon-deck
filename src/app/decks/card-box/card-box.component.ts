import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Card } from "../shared/card/card.model";

@Component({
  selector: "app-card-box",
  templateUrl: "./card-box.component.html",
  styleUrls: ["./card-box.component.scss"],
})
export class CardBoxComponent implements OnInit {
  @Input()
  public card: Card;

  @Output()
  public addEvent = new EventEmitter<Card>();

  constructor() {}

  public ngOnInit() {}

  public add(): void {
    this.addEvent.emit(this.card);
  }
}
