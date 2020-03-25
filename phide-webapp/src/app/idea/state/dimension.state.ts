import { State, StateContext, Selector, NgxsOnInit, Action } from "@ngxs/store";
import { Dimension } from "src/app/shared/types/dimension";
import { DimensionService } from "../services/dimension.service";
import { Injectable } from "@angular/core";
import {
  SelectDimension,
  UnselectDimension,
  LoadInitialData
} from "./dimension.actions";
import { patch, removeItem, insertItem } from "@ngxs/store/operators";
import { map } from "rxjs/operators";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";

export interface DimensionStateModel {
  dimensions: Dimension[];
  selectedDimensions: string[];
}

@State<DimensionStateModel>({
  name: "dimensions"
})
@Injectable()
export class DimensionState implements NgxsOnInit {
  @Selector()
  static dimensionOptions(
    state: DimensionStateModel
  ): { name: string; selected: boolean }[] {
    return state.dimensions.map(d => ({
      name: d.name,
      selected: !!state.selectedDimensions.find(s => s === d.name)
    }));
  }
  @Selector()
  static selectedDimensions(state: DimensionStateModel): string[] {
    return state.selectedDimensions;
  }
  @Selector()
  static dimensions(state: DimensionStateModel): Dimension[] {
    return state.dimensions;
  }

  @Action(SelectDimension) selectDimension(
    ctx: StateContext<DimensionStateModel>,
    { name }: SelectDimension
  ) {
    ctx.setState(
      patch({
        selectedDimensions: insertItem<string>(name)
      })
    );
  }
  @Action(UnselectDimension) unselectDimension(
    ctx: StateContext<DimensionStateModel>,
    { name }: UnselectDimension
  ) {
    ctx.setState(
      patch({
        selectedDimensions: removeItem<string>(i => i === name)
      })
    );
  }
  @Action(LoadInitialData) loadInitialData(
    ctx: StateContext<DimensionStateModel>
  ) {
    return this.dimensionsService.dimensions$().pipe(
      map(i =>
        ctx.setState({
          dimensions: i,
          selectedDimensions: []
        })
      )
    );
  }

  @Dispatch() _loadInitialData = () => new LoadInitialData();
  ngxsOnInit(ctx: StateContext<DimensionStateModel>) {
    this._loadInitialData();
  }
  constructor(private dimensionsService: DimensionService) {}
}
