import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "phide-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorComponent implements OnInit {
  @Input() options: { name: string; selected: boolean }[];
  @Output() toggleOption = new EventEmitter<{
    selected: boolean;
    name: string;
  }>();
  constructor() {}

  ngOnInit(): void {}
}
