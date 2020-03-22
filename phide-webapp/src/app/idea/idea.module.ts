import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdeaRoutingModule } from "./idea-routing.module";
import { IdeaComponent } from "./idea.component";
import { OverviewComponent } from "./overview/overview.component";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgxsModule } from "@ngxs/store";
import { IdeaState } from "./state/idea.state";

@NgModule({
  declarations: [IdeaComponent, OverviewComponent],
  imports: [
    CommonModule,
    IdeaRoutingModule,
    MatListModule,
    MatToolbarModule,
    NgxsModule.forFeature([IdeaState])
  ]
})
export class IdeaModule {}
