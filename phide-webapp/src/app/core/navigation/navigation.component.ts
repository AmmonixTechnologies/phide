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
      title: "idea",
      icon: "not_listed_location",
      navigationItems: [
        { uri: "idea/overview", display: "overview", icon: "list" },
        {
          uri: "idea/dimension-visualizer",
          display: "dimension-visualizer",
          icon: "open_with"
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
