import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  public searchFormControl = new FormControl("");

  @Output()
  public searchEvent = new EventEmitter<string>();

  constructor() {}

  public ngOnInit() {
    this.initSearch();
  }

  private initSearch(): void {
    this.searchFormControl.valueChanges.subscribe((value) =>
      this.searchEvent.emit(value)
    );
  }
}
