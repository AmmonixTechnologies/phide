import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Idea } from "src/app/shared/types/idea";

@Component({
  selector: "phide-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {
  @Input() ideas: Idea[];
  constructor() {}
  ngOnInit(): void {}
}
