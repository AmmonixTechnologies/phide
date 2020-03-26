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
import { Dimension } from "src/app/shared/types/dimension";
import { map } from "rxjs/operators";

@Component({
  selector: "phide-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {
  @Select(IdeaState.ideas) _ideas$: Observable<Idea[]>;
  ideas$ = this._ideas$.pipe(
    map(i =>
      i.map(j => ({
        name: j.name,
        dimensions: j.dimensions.reduce(
          (p, c) => {
            p.labels.push(c.dimension.name);
            p.froms.push(c.dimension.from);
            p.tos.push(c.dimension.to);
            p.percentages.push(c.percentage);
            return p;
          },
          { labels: [], froms: [], tos: [], percentages: [] }
        )
      }))
    )
  );
  constructor() {}
  ngOnInit(): void {}
}
