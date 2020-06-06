import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Deck } from "../shared/deck.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  search = new FormControl("");

  deckList: Array<Deck>;

  constructor() {}

  ngOnInit() {
    this.initSearch();
    this.initDeckList();
  }

  private initSearch(): void {
    this.search.valueChanges.subscribe((value) => console.log(value));
  }

  private initDeckList(): void {
    this.deckList = [
      {
        name: "Picachu Deck",
        id: 1,
      },
      {
        name: "Raio Deck",
        id: 2,
      },
    ];
  }

  public deleteItem(id: number): void {
    this.deckList = this.deckList.filter((it) => it.id !== id);
  }
}
