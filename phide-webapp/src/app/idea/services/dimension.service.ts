import { Injectable } from "@angular/core";
import { Dimension } from "src/app/shared/types/dimension";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DimensionService {
  private _dimensions$(): Observable<string> {
    return of(
      JSON.stringify([
        new Dimension("economical"),
        new Dimension("cultural"),
        new Dimension("accelerationist"),
        new Dimension("wacky"),
        new Dimension("statist")
      ])
    );
  }
  public dimensions$(): Observable<Dimension[]> {
    return this._dimensions$().pipe(map(i => JSON.parse(i) as Dimension[]));
  }
  constructor() {}
}
