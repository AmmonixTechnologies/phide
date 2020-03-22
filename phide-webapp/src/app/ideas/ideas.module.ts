import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdeasRoutingModule } from "./ideas-routing.module";
import { IdeasComponent } from "./ideas.component";
import { OverviewComponent } from "./overview/overview.component";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgxsModule } from "@ngxs/store";
import { IdeasState } from "./state/ideas.state";

@NgModule({
  declarations: [IdeasComponent, OverviewComponent],
  imports: [
    CommonModule,
    IdeasRoutingModule,
    MatListModule,
    MatToolbarModule,
    NgxsModule.forFeature([IdeasState])
  ]
})
export class IdeasModule {}
