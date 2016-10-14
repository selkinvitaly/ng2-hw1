import { Component } from "@angular/core";

export interface WidgetPlaceItem {
  id: string;
  firstImage: string;
  secondImage: string;
  temperature: number;
  humidity: number;
  followers: number;
  following: number;
  weatherTitle: string;
  statsTitle: string;
  placeTitle: string;
}

const fixtures: WidgetPlaceItem[] = [{
  id: "0",
  firstImage: "assets/images/1.jpg",
  secondImage: "assets/images/2.jpg",
  temperature: 14,
  humidity: 20,
  followers: 2850,
  following: 675,
  weatherTitle: "weather title 1",
  statsTitle: "stats title 1",
  placeTitle: "place title 1"
}, {
  id: "1",
  firstImage: "assets/images/3.jpg",
  secondImage: "assets/images/4.jpg",
  temperature: 15,
  humidity: 21,
  followers: 3850,
  following: 775,
  weatherTitle: "weather title 2",
  statsTitle: "stats title 2",
  placeTitle: "place title 2"
}];

@Component({
  selector: "widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.css"]
})
export class WidgetComponent {

  public places: WidgetPlaceItem[] = fixtures;
  public selected: number = 0;
  public changeArticle = (index: number): void => {
    this.selected = index;
  }

}
