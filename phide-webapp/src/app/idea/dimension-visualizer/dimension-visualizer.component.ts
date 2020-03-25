import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ChartType, RadialChartOptions } from "chart.js";
import { Select } from "@ngxs/store";
import { DimensionState } from "../state/dimension.state";
import { Observable, combineLatest } from "rxjs";
import { map, filter, tap } from "rxjs/operators";
import { IdeaState } from "../state/idea.state";
import { Idea } from "src/app/shared/types/idea";

@Component({
  selector: "phide-dimension-visualizer",
  templateUrl: "./dimension-visualizer.component.html",
  styleUrls: ["./dimension-visualizer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimensionVisualizerComponent implements OnInit {
  @Select(DimensionState.selectedDimensions) selectedDimensions$: Observable<
    string[]
  >;
  labels$ = this.selectedDimensions$.pipe(map(i => i.slice().sort()));
  @Select(IdeaState.selectedIdeas) selectedIdeas$: Observable<Idea[]>;
  data$ = combineLatest(this.selectedIdeas$, this.labels$).pipe(
    map(([idea, selectedDimensions]) =>
      idea.map(j => ({
        label: j.name,
        data: selectedDimensions.map(
          s => j.dimensions.find(d => d.dimension.name == s)?.percentage ?? 50
        )
      }))
    )
  );
  radarData$ = combineLatest(this.data$, this.labels$).pipe(
    filter(([d, l]) => !!d.length),
    map(([d, l]) => ({ data: d, labels: l }))
  );
  radarChartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
      ticks: {
        display: false,
        beginAtZero: true,
        max: 100,
        showLabelBackdrop: false
      }
    },
    tooltips: { enabled: false }
  };

  radarChartType: ChartType = "radar";

  constructor() {}

  ngOnInit() {}
}
