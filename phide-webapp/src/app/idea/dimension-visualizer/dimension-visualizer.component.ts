import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "phide-dimension-visualizer",
  templateUrl: "./dimension-visualizer.component.html",
  styleUrls: ["./dimension-visualizer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimensionVisualizerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
