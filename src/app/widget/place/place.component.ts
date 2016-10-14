import { Component, Input } from "@angular/core";
import { WidgetPlaceItem } from "../widget.component";

@Component({
  selector: "place-component",
  templateUrl: "./place.component.html",
  styleUrls: ["./place.component.css"]
})
export class PlaceComponent {

  @Input()
  public places: WidgetPlaceItem[]; // в ngFor почему-то не работает track by по placeItem.id

  @Input()
  public changeArticle: (index: number) => void;

  @Input()
  private selected: number;

  get headerImage() {
    return this.places[this.selected].firstImage;
  }

}
