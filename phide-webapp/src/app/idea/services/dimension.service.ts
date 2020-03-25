import { Injectable } from "@angular/core";
import { Dimension } from "src/app/shared/types/dimension";

@Injectable({
  providedIn: "root"
})
export class DimensionService {
  dimensions(): Dimension[] {
    return [
      new Dimension("economical"),
      new Dimension("cultural"),
      new Dimension("accelerationist"),
      new Dimension("wacky"),
      new Dimension("statist")
    ];
  }

  constructor() {}
}
