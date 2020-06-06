import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecksComponent } from './decks.component';

const routes: Routes = [{ path: '', component: DecksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecksRoutingModule { }
