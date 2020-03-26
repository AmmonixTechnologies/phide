import { State, StateContext, Selector, NgxsOnInit, Action } from "@ngxs/store";

import { Injectable } from "@angular/core";
import {
  LoadInitialData,
  SelectIdea,
  UnselectIdea,
  SelectDimension,
  UnselectDimension
} from "./visualizer.actions";
import { patch, removeItem, insertItem } from "@ngxs/store/operators";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Idea } from "src/app/shared/types/idea";
import { IdeaStateModel, IdeaState } from "./idea.state";
import { DimensionStateModel, DimensionState } from "./dimension.state";

export interface VisualizerStateModel {
  selectedDimensions: string[];
  selectedIdeas: string[];
}

@State<VisualizerStateModel>({
  name: "visualizers",
  defaults: { selectedDimensions: [], selectedIdeas: [] }
})
@Injectable()
export class VisualizerState implements NgxsOnInit {
  @Selector([IdeaState])
  static selectedIdeas(
    state: VisualizerStateModel,
    ideaState: IdeaStateModel
  ): Idea[] {
    return state.selectedIdeas.map(s => ideaState.ideas.find(i => i.name == s));
  }

  @Selector([VisualizerState.selectedIdeas])
  static selectedDimensions(
    state: VisualizerStateModel,
    selectedIdeas: Idea[]
  ): string[] {
    return state.selectedDimensions.filter(
      d =>
        selectedIdeas.length > 0 &&
        selectedIdeas.every(i => i.dimensions.find(j => j.dimension.name == d))
    );
  }

  @Selector([IdeaState])
  static ideaOptions(
    state: VisualizerStateModel,
    ideaState: IdeaStateModel
  ): { name: string; selected: boolean }[] {
    return ideaState.ideas.map(i => ({
      name: i.name,
      selected: !!state.selectedIdeas.find(s => s === i.name)
    }));
  }

  @Selector([VisualizerState.selectedIdeas, DimensionState])
  static dimensionOptions(
    state: VisualizerStateModel,
    selectedIdeas: Idea[],
    dimensionState: DimensionStateModel
  ): { name: string; selected: boolean }[] {
    return dimensionState.dimensions
      .filter(
        d =>
          selectedIdeas.length > 0 &&
          selectedIdeas.every(i =>
            i.dimensions.find(j => j.dimension.name == d.name)
          )
      )
      .map(d => ({
        name: d.name,
        selected: !!state.selectedDimensions.find(s => s === d.name)
      }));
  }

  @Action(SelectIdea) selectIdea(
    ctx: StateContext<VisualizerStateModel>,
    { name }: SelectIdea
  ) {
    ctx.setState(
      patch({
        selectedIdeas: insertItem<string>(name)
      })
    );
  }
  @Action(UnselectIdea) unselectIdea(
    ctx: StateContext<VisualizerStateModel>,
    { name }: UnselectIdea
  ) {
    ctx.setState(
      patch({
        selectedIdeas: removeItem<string>(i => i === name)
      })
    );
  }

  @Action(SelectDimension) selectDimension(
    ctx: StateContext<VisualizerStateModel>,
    { name }: SelectDimension
  ) {
    ctx.setState(
      patch({
        selectedDimensions: insertItem<string>(name)
      })
    );
  }
  @Action(UnselectDimension) unselectDimension(
    ctx: StateContext<VisualizerStateModel>,
    { name }: UnselectDimension
  ) {
    ctx.setState(
      patch({
        selectedDimensions: removeItem<string>(i => i === name)
      })
    );
  }
  @Dispatch() _loadInitialData = () => new LoadInitialData();
  ngxsOnInit(ctx: StateContext<VisualizerStateModel>) {
    this._loadInitialData();
  }
  constructor() {}
}
