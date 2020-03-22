import { State, Action, StateContext, Selector, NgxsOnInit } from "@ngxs/store";
import { Idea } from "src/app/shared/types/idea";
import { IdeasService } from "../services/ideas.service";
import { Injectable } from "@angular/core";

export interface IdeasStateModel {
  ideas: Idea[];
}

@State<IdeasStateModel>({
  name: "ideas"
})
@Injectable()
export class IdeasState implements NgxsOnInit {
  @Selector()
  static ideas(state: IdeasStateModel): Idea[] {
    return state.ideas;
  }

  ngxsOnInit(ctx: StateContext<IdeasStateModel>) {
    ctx.setState({ ideas: this.ideasService.ideas() });
  }
  constructor(private ideasService: IdeasService) {}
}
