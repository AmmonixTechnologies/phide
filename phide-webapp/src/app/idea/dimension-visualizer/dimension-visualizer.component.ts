import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ChartType, RadialChartOptions } from "chart.js";
import { Select } from "@ngxs/store";
import { Observable, combineLatest, iif, of } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Idea } from "src/app/shared/types/idea";
import { TranslateService } from "@ngx-translate/core";
import { VisualizerState } from "../state/visualizer.state";

@Component({
  selector: "phide-dimension-visualizer",
  templateUrl: "./dimension-visualizer.component.html",
  styleUrls: ["./dimension-visualizer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimensionVisualizerComponent implements OnInit {
  @Select(VisualizerState.selectedDimensions) labels$: Observable<string[]>;
  @Select(VisualizerState.selectedIdeas) selectedIdeas$: Observable<Idea[]>;
  data$ = combineLatest(this.selectedIdeas$, this.labels$).pipe(
    map(([idea, selectedDimensions]) =>
      idea.map(j => ({
        label: this.translateService.instant(j.name),
        data: selectedDimensions.map(
          s => j.dimensions.find(d => d.dimension.name == s)?.percentage
        )
      }))
    )
  );
  radarData$ = combineLatest(this.data$, this.labels$).pipe(
    mergeMap(([d, l]) =>
      iif(
        () => !!d.length,
        of({
          data: d,
          labels: l.map(i => this.translateService.instant(i))
        }),
        of(null)
      )
    )
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

  constructor(private translateService: TranslateService) {}

  ngOnInit() {}
}
