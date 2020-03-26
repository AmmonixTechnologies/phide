import { State, StateContext, Selector, NgxsOnInit, Action } from "@ngxs/store";
import { Dimension } from "src/app/shared/types/dimension";
import { DimensionService } from "../services/dimension.service";
import { Injectable } from "@angular/core";
import { LoadInitialData } from "./dimension.actions";
import { patch, removeItem, insertItem } from "@ngxs/store/operators";
import { map } from "rxjs/operators";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";

export interface DimensionStateModel {
  dimensions: Dimension[];
}

@State<DimensionStateModel>({
  name: "dimensions"
})
@Injectable()
export class DimensionState implements NgxsOnInit {
  @Selector()
  static dimensions(state: DimensionStateModel): Dimension[] {
    return state.dimensions;
  }

  @Action(LoadInitialData) loadInitialData(
    ctx: StateContext<DimensionStateModel>
  ) {
    return this.dimensionsService.dimensions$().pipe(
      map(i =>
        ctx.setState({
          dimensions: i
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
