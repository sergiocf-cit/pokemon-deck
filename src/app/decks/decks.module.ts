import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DecksRoutingModule } from "./decks-routing.module";
import { ListComponent } from "./list/list.component";
import { SharedModule } from "../shared/shared.module";
import { DeckBoxComponent } from "./deck-box/deck-box.component";
import { InsertComponent } from "./insert/insert.component";
import { CardBoxComponent } from "./card-box/card-box.component";
import { InputCardComponent } from "../shared/input-card/input-card.component";

@NgModule({
  declarations: [
    ListComponent,
    InsertComponent,
    DeckBoxComponent,
    CardBoxComponent,
  ],
  imports: [CommonModule, SharedModule, DecksRoutingModule],
})
export class DecksModule {}
