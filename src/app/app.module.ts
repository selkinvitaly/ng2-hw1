import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WidgetComponent } from "./widget/widget.component";
import { PlaceComponent } from "./widget/place/place.component";
import { WeatherComponent } from "./widget/weather/weather.component";
import { StatsComponent } from "./widget/stats/stats.component";
import { PlaceItemComponent } from "./widget/place/place-item/place-item.component";

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    PlaceComponent,
    WeatherComponent,
    StatsComponent,
    PlaceItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
