import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Deck } from "../shared/deck/deck.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-deck-box",
  templateUrl: "./deck-box.component.html",
  styleUrls: ["./deck-box.component.scss"],
})
export class DeckBoxComponent implements OnInit {
  @Input()
  public deck: Deck;

  @Output()
  public deleteEvent = new EventEmitter<Deck>();

  constructor(private router: Router) {}

  ngOnInit() {}

  public detail(): void {
    this.router.navigate(["decks/detail"]);
  }
}
