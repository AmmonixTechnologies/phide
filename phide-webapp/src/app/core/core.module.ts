import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatExpansionModule } from "@angular/material/expansion";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [NavigationComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    RouterModule,
    SharedModule,
  ],
  exports: [NavigationComponent],
})
export class CoreModule {}
