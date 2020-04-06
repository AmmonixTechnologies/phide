import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Axis } from "src/app/shared/types/axis";
import { map } from "rxjs/operators";
import { Dimension } from "src/app/shared/types/dimension";
import { SimulatedDataBaseService } from "./simulated-data-base.service";

@Injectable({
  providedIn: "root",
})
export class AxisService {
  public axes$(): Observable<Axis[]> {
    return this.simulatedDataBaseService
      .axes$()
      .pipe(map((i) => JSON.parse(i) as Axis[]));
  }
  constructor(private simulatedDataBaseService: SimulatedDataBaseService) {}
}
