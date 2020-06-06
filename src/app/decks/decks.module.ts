import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecksRoutingModule } from './decks-routing.module';
import { DecksComponent } from './decks.component';


@NgModule({
  declarations: [DecksComponent],
  imports: [
    CommonModule,
    DecksRoutingModule
  ]
})
export class DecksModule { }
