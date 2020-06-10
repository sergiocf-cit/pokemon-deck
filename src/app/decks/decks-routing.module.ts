import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { InsertComponent } from "./insert/insert.component";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "insert", component: InsertComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecksRoutingModule {}
