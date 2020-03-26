import { Injectable } from "@angular/core";
import { Dimension } from "src/app/shared/types/dimension";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { SimulatedDataBaseService } from "./simulated-data-base.service";

@Injectable({
  providedIn: "root"
})
export class DimensionService {
  public dimensions$(): Observable<Dimension[]> {
    return this.simulatedDataBaseService
      .dimensions$()
      .pipe(map(i => JSON.parse(i) as Dimension[]));
  }
  constructor(private simulatedDataBaseService: SimulatedDataBaseService) {}
}
