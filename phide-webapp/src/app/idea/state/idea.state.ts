import { State, StateContext, Selector, NgxsOnInit, Action } from "@ngxs/store";
import { Idea } from "src/app/shared/types/idea";
import { IdeaService } from "../services/idea.service";
import { Injectable } from "@angular/core";
import { LoadInitialData } from "./idea.actions";
import { map } from "rxjs/operators";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";

export interface IdeaStateModel {
  ideas: Idea[];
}

@State<IdeaStateModel>({
  name: "ideas"
})
@Injectable()
export class IdeaState implements NgxsOnInit {
  @Selector()
  static ideas(state: IdeaStateModel): Idea[] {
    return state.ideas;
  }

  @Action(LoadInitialData) loadInitialData(ctx: StateContext<IdeaStateModel>) {
    return this.ideasService.ideas$().pipe(
      map(i =>
        ctx.setState({
          ideas: i
        })
      )
    );
  }
  @Dispatch() _loadInitialData = () => new LoadInitialData();
  ngxsOnInit(ctx: StateContext<IdeaStateModel>) {
    this._loadInitialData();
  }
  constructor(private ideasService: IdeaService) {}
}
