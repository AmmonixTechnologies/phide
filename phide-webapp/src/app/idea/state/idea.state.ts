import { State, Action, StateContext, Selector, NgxsOnInit } from "@ngxs/store";
import { Idea } from "src/app/shared/types/idea";
import { IdeaService } from "../services/idea.service";
import { Injectable } from "@angular/core";

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

  ngxsOnInit(ctx: StateContext<IdeaStateModel>) {
    ctx.setState({ ideas: this.ideasService.ideas() });
  }
  constructor(private ideasService: IdeaService) {}
}
