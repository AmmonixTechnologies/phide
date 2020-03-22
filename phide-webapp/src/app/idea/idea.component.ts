import { Component, OnInit } from "@angular/core";
import { Idea } from "../shared/types/idea";
import { Observable } from "rxjs";
import { IdeaState } from "./state/idea.state";
import { Select } from "@ngxs/store";

@Component({
  selector: "phide-idea",
  templateUrl: "./idea.component.html",
  styleUrls: ["./idea.component.scss"]
})
export class IdeaComponent implements OnInit {
  @Select(IdeaState.ideas) ideas$: Observable<Idea[]>;
  constructor() {}

  ngOnInit(): void {}
}
