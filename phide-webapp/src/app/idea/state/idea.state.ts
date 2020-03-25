import { State, StateContext, Selector, NgxsOnInit, Action } from "@ngxs/store";
import { Idea } from "src/app/shared/types/idea";
import { IdeaService } from "../services/idea.service";
import { Injectable } from "@angular/core";
import { SelectIdea, UnselectIdea } from "./idea.actions ";
import { patch, insertItem, removeItem } from "@ngxs/store/operators";

export interface IdeaStateModel {
  ideas: Idea[];
  selectedIdeas: string[];
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
  @Selector()
  static selectedIdeas(state: IdeaStateModel): Idea[] {
    return state.selectedIdeas.map(s => state.ideas.find(i => i.name == s));
  }
  @Selector()
  static ideaOptions(
    state: IdeaStateModel
  ): { name: string; selected: boolean }[] {
    return state.ideas.map(i => ({
      name: i.name,
      selected: !!state.selectedIdeas.find(s => s === i.name)
    }));
  }
  ngxsOnInit(ctx: StateContext<IdeaStateModel>) {
    ctx.setState({ ideas: this.ideasService.ideas(), selectedIdeas: [] });
  }
  @Action(SelectIdea) selectIdea(
    ctx: StateContext<IdeaStateModel>,
    { name }: SelectIdea
  ) {
    ctx.setState(
      patch({
        selectedIdeas: insertItem<string>(name)
      })
    );
  }
  @Action(UnselectIdea) unselectIdea(
    ctx: StateContext<IdeaStateModel>,
    { name }: UnselectIdea
  ) {
    ctx.setState(
      patch({
        selectedIdeas: removeItem<string>(i => i === name)
      })
    );
  }
  constructor(private ideasService: IdeaService) {}
}
