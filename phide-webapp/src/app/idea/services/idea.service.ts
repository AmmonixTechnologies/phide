import { Injectable } from "@angular/core";
import { Idea } from "src/app/shared/types/idea";
import { Dimension } from "src/app/shared/types/dimension";

@Injectable({
  providedIn: "root"
})
export class IdeaService {
  ideas(): Idea[] {
    return [
      new Idea("anarcho_primitivism", [
        { dimension: new Dimension("cultural"), percentage: 90 },
        { dimension: new Dimension("statist"), percentage: 20 },
        { dimension: new Dimension("wacky"), percentage: 100 },
        {
          dimension: new Dimension("accelerationist"),
          percentage: 0
        }
      ]),
      new Idea("national_bolshevism", [
        { dimension: new Dimension("cultural"), percentage: 100 },
        { dimension: new Dimension("economical"), percentage: 0 },
        { dimension: new Dimension("statist"), percentage: 100 },
        { dimension: new Dimension("wacky"), percentage: 60 }
      ])
    ];
  }

  constructor() {}
}
