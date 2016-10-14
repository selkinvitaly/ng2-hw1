import { Component, Input } from "@angular/core";
// как вообще такие импорты дефинишенев решаются на глубоких уровнях вложенности?
import { WidgetPlaceItem } from "../../widget.component";

@Component({
  selector: "place-item",
  templateUrl: "./place-item.component.html",
  styleUrls: ["./place-item.component.css"]
})
export class PlaceItemComponent {

  @Input()
  public orderIndex: number;

  public changeHandler = (index: number): void => {
    this.changeArticle(index);
  };

  @Input()
  private placeItem; // если поставить тип WidgetPlaceItem, то будет ворнинг, что не найден экспорт. почему?

  @Input()
  private changeArticle: (index: number) => void;

  @Input()
  private isSelected: boolean;

}
