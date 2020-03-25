import { Component, OnInit } from "@angular/core";
import { NavigationItem } from "src/app/shared/types/navigation-item";

@Component({
  selector: "phide-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  links: {
    title: string;
    icon: string;
    navigationItems: NavigationItem[];
  }[] = [
    {
      title: "navigation.idea",
      icon: "not_listed_location",
      navigationItems: [
        new NavigationItem("overview", "idea/overview", "list"),
        new NavigationItem(
          "dimension_visualizer",
          "idea/dimension-visualizer",
          "open_with"
        )
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
