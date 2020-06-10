import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DecksRoutingModule } from "./decks-routing.module";
import { ListComponent } from "./list/list.component";
import { SharedModule } from "../shared/shared.module";
import { DeckBoxComponent } from "./deck-box/deck-box.component";
import { InsertComponent } from "./insert/insert.component";

@NgModule({
  declarations: [ListComponent, InsertComponent, DeckBoxComponent],
  imports: [CommonModule, SharedModule, DecksRoutingModule],
})
export class DecksModule {}
