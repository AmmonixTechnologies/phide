import { Injectable } from "@angular/core";
import { Idea } from "src/app/shared/types/idea";
import { Dimension } from "src/app/shared/types/dimension";

@Injectable({
  providedIn: "root"
})
export class IdeasService {
  ideas(): Idea[] {
    return [
      {
        name: "Anarcho-primitivism",
        dimensions: [{ dimension: new Dimension("cultural"), percentage: 100 }]
      },
      {
        name: "National Bolshevism",
        dimensions: [
          { dimension: new Dimension("cultural"), percentage: 100 },
          { dimension: new Dimension("economical"), percentage: 0 }
        ]
      }
    ];
  }

  constructor() {}
}
