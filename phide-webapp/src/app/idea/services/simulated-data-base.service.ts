import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { Dimension } from "src/app/shared/types/dimension";
import { Idea } from "src/app/shared/types/idea";

@Injectable({
  providedIn: "root"
})
export class SimulatedDataBaseService {
  _dimensions = {
    economical: new Dimension("economical"),
    cultural: new Dimension("cultural"),
    statist: new Dimension("statist"),
    wacky: new Dimension("wacky"),
    environmentalist: new Dimension("environmentalist")
  };

  private readonly dimensions = [this._dimensions.economical];

  private readonly _ideas = [
    new Idea("communism", [
      { dimension: this._dimensions.economical, percentage: 0 },
      { dimension: this._dimensions.cultural, percentage: 5 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.wacky, percentage: 10 }
    ]),
    new Idea("posadism", [
      { dimension: this._dimensions.economical, percentage: 0 },
      { dimension: this._dimensions.cultural, percentage: 5 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.wacky, percentage: 95 }
    ]),

    new Idea("facism", [
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 90 }
    ]),
    new Idea("ecofacism", [
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.environmentalist, percentage: 80 },
      { dimension: this._dimensions.wacky, percentage: 10 }
    ]),
    new Idea("national_bolshevism", [
      { dimension: this._dimensions.economical, percentage: 0 },
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.wacky, percentage: 50 }
    ]),
    new Idea("anarcho_facism", [
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 0 },
      { dimension: this._dimensions.wacky, percentage: 30 }
    ]),
    new Idea("nazism", [
      { dimension: this._dimensions.economical, percentage: 50 },
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.wacky, percentage: 10 }
    ])
  ];

  public dimensions$(): Observable<string> {
    return of(JSON.stringify(Object.values(this._dimensions)));
  }
  public ideas$(): Observable<string> {
    return of(JSON.stringify(this._ideas));
  }
  constructor() {}
}
