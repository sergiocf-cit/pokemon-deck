import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DecksRoutingModule } from "./decks-routing.module";
import { DecksComponent } from "./decks.component";
import { ListComponent } from "./list/list.component";
import { SharedModule } from "../shared/shared.module";
import { DeckBoxComponent } from './deck-box/deck-box.component';

@NgModule({
  declarations: [DecksComponent, ListComponent, DeckBoxComponent],
  imports: [CommonModule, SharedModule, DecksRoutingModule],
})
export class DecksModule {}
