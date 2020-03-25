import { State, StateContext, Selector, NgxsOnInit, Action } from "@ngxs/store";
import { Dimension } from "src/app/shared/types/dimension";
import { DimensionService } from "../services/dimension.service";
import { Injectable, Predicate } from "@angular/core";
import { SelectDimension, UnselectDimension } from "./dimension.actions";
import {
  patch,
  append,
  removeItem,
  updateItem,
  insertItem
} from "@ngxs/store/operators";

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

  ngxsOnInit(ctx: StateContext<DimensionStateModel>) {
    ctx.setState({
      dimensions: this.dimensionsService.dimensions(),
      selectedDimensions: []
    });
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
  constructor(private dimensionsService: DimensionService) {}
}
