import { Injectable } from "@angular/core";
import { Idea } from "src/app/shared/types/idea";
import { Dimension } from "src/app/shared/types/dimension";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { SimulatedDataBaseService } from "./simulated-data-base.service";

@Injectable({
  providedIn: "root"
})
export class IdeaService {
  public ideas$(): Observable<Idea[]> {
    return this.simulatedDataBaseService
      .ideas$()
      .pipe(map(i => JSON.parse(i) as Idea[]));
  }
  constructor(private simulatedDataBaseService: SimulatedDataBaseService) {}
}
