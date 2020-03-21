import { Component, OnInit } from "@angular/core";

@Component({
  selector: "phide-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  links = [{ uri: "ideas", display: "Ideas", icon: "home" }];
  constructor() {}

  ngOnInit() {}
}
