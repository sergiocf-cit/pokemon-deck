import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-deck-box",
  templateUrl: "./deck-box.component.html",
  styleUrls: ["./deck-box.component.scss"],
})
export class DeckBoxComponent implements OnInit {
  @Input()
  public name: string;

  @Input()
  public id: number;

  @Output()
  public delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
}
