import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdeaRoutingModule } from "./idea-routing.module";
import { OverviewComponent } from "./overview/overview.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgxsModule } from "@ngxs/store";
import { IdeaState } from "./state/idea.state";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatSliderModule } from "@angular/material/slider";
import { DimensionVisualizerComponent } from "./dimension-visualizer/dimension-visualizer.component";
import { ChartsModule } from "ng2-charts";
import { DimensionState } from "./state/dimension.state";
import { VisualizerOptionsComponent } from "./visualizer-options/visualizer-options.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SelectorComponent } from "./visualizer-options/selector/selector.component";
import { SharedModule } from "../shared/shared.module";
import { VisualizerState } from "./state/visualizer.state";

@NgModule({
  declarations: [
    OverviewComponent,
    DimensionVisualizerComponent,
    VisualizerOptionsComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    IdeaRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatSliderModule,
    ChartsModule,
    MatCheckboxModule,
    SharedModule,
    NgxsModule.forFeature([IdeaState, DimensionState, VisualizerState])
  ]
})
export class IdeaModule {}
