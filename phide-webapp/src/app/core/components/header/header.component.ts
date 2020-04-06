import {
  Component,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "phide-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
