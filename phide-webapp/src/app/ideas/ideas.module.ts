import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdeasRoutingModule } from "./ideas-routing.module";
import { IdeasComponent } from "./ideas.component";
import { OverviewComponent } from "./overview/overview.component";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [IdeasComponent, OverviewComponent],
  imports: [CommonModule, IdeasRoutingModule, MatListModule, MatToolbarModule]
})
export class IdeasModule {}
