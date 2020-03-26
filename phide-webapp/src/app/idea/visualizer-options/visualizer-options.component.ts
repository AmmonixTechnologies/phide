import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import {
  SelectDimension,
  UnselectDimension,
  SelectIdea,
  UnselectIdea
} from "../state/visualizer.actions";
import { VisualizerState } from "../state/visualizer.state";

@Component({
  selector: "phide-visualizer-options",
  templateUrl: "./visualizer-options.component.html",
  styleUrls: ["./visualizer-options.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizerOptionsComponent implements OnInit {
  @Select(VisualizerState.dimensionOptions) dimensionOptions$: Observable<
    { name: string; selected: boolean }[]
  >;
  @Select(VisualizerState.ideaOptions) ideaOptions$: Observable<
    { name: string; selected: boolean }[]
  >;

  @Dispatch() selectDimension = (name: string) => new SelectDimension(name);
  @Dispatch() unselectDimension = (name: string) => new UnselectDimension(name);

  @Dispatch() selectIdea = (name: string) => new SelectIdea(name);
  @Dispatch() unselectIdea = (name: string) => new UnselectIdea(name);
  constructor() {}
  ngOnInit(): void {}
  toggleDimension({ selected, name }) {
    if (selected) {
      this.selectDimension(name);
    } else {
      this.unselectDimension(name);
    }
  }
  toggleIdea({ selected, name }) {
    if (selected) {
      this.selectIdea(name);
    } else {
      this.unselectIdea(name);
    }
  }
}
