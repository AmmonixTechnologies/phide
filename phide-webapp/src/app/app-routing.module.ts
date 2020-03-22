import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "ideas",
    loadChildren: () => import("./idea/idea.module").then(m => m.IdeaModule)
  },
  {
    path: "",
    redirectTo: "/ideas",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "/ideas" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
