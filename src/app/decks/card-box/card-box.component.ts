import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-card-box",
  templateUrl: "./card-box.component.html",
  styleUrls: ["./card-box.component.scss"],
})
export class CardBoxComponent implements OnInit {
  @Input()
  public name: string;

  @Input()
  public id: number;

  @Input()
  public imageUrl: string;

  @Output()
  public add = new EventEmitter<number>();

  constructor() {}

  public ngOnInit() {}
}
