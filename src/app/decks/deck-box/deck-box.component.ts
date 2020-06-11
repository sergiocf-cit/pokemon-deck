import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-deck-box",
  templateUrl: "./deck-box.component.html",
  styleUrls: ["./deck-box.component.scss"],
})
export class DeckBoxComponent implements OnInit {
  @Input()
  public name: string;

  @Output()
  public delete = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
