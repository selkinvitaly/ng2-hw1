import { Component, Input } from "@angular/core";

@Component({
  selector: "stats-component",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"]
})
export class StatsComponent {

  @Input()
  private currentPlace;

}
