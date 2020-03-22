import { Component, OnInit } from "@angular/core";
import { NavigationItem } from "src/app/shared/types/navigation-item";

@Component({
  selector: "phide-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  links: NavigationItem[] = [{ uri: "ideas", display: "Ideas", icon: "list" }];
  constructor() {}

  ngOnInit() {}
}
