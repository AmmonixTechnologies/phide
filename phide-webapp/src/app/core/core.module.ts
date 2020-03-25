import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation/navigation.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatExpansionModule } from "@angular/material/expansion";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    RouterModule,
    SharedModule
  ],
  exports: [NavigationComponent]
})
export class CoreModule {}
