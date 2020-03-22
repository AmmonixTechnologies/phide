import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdeaRoutingModule } from "./idea-routing.module";
import { IdeaComponent } from "./idea.component";
import { OverviewComponent } from "./overview/overview.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgxsModule } from "@ngxs/store";
import { IdeaState } from "./state/idea.state";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [IdeaComponent, OverviewComponent],
  imports: [
    CommonModule,
    IdeaRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatSliderModule,
    NgxsModule.forFeature([IdeaState])
  ]
})
export class IdeaModule {}
