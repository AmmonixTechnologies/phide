import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OverviewComponent } from "./overview/overview.component";
import { DimensionVisualizerComponent } from "./dimension-visualizer/dimension-visualizer.component";

const routes: Routes = [
  { path: "overview", component: OverviewComponent },
  { path: "dimension-visualizer", component: DimensionVisualizerComponent },
  { path: "", redirectTo: "overview", pathMatch: "full" },
  { path: "**", redirectTo: "overview", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaRoutingModule {}
