import { Component, OnInit } from "@angular/core";
import { Idea } from "../shared/types/idea";
import { Observable } from "rxjs";
import { IdeasState } from "./state/ideas.state";
import { Select } from "@ngxs/store";

@Component({
  selector: "phide-ideas",
  templateUrl: "./ideas.component.html",
  styleUrls: ["./ideas.component.scss"]
})
export class IdeasComponent implements OnInit {
  @Select(IdeasState.ideas) ideas$: Observable<Idea[]>;
  constructor() {}

  ngOnInit(): void {}
}
