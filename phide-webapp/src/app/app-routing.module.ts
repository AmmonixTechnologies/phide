import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "idea",
    loadChildren: () => import("./idea/idea.module").then(m => m.IdeaModule)
  },
  {
    path: "",
    redirectTo: "idea",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "idea", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
