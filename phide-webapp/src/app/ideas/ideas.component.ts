import { Component, OnInit } from "@angular/core";

@Component({
  selector: "phide-ideas",
  templateUrl: "./ideas.component.html",
  styleUrls: ["./ideas.component.scss"]
})
export class IdeasComponent implements OnInit {
  data = [{ name: "Anarcho-primitivism" }, { name: "Nazbol" }];
  constructor() {}

  ngOnInit(): void {}
}
