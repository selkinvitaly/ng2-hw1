import { Component, Input } from "@angular/core";

@Component({
  selector: "weather-component",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent {

  @Input()
  public currentPlace;

}
