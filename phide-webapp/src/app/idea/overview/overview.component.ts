import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Idea } from "src/app/shared/types/idea";
import { Select } from "@ngxs/store";
import { IdeaState } from "../state/idea.state";
import { Observable } from "rxjs";

@Component({
  selector: "phide-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {
  @Select(IdeaState.ideas) ideas$: Observable<Idea[]>;
  constructor() {}
  ngOnInit(): void {}
}
