import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";

@Component({
  selector: "phide-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {
  @Input() ideas: any;
  constructor() {}

  ngOnInit(): void {}
}
