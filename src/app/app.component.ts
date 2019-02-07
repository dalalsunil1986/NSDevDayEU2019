import { Component } from "@angular/core";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("Carousel", () => require("nativescript-carousel").Carousel);
registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);

@Component({
  moduleId: module.id,
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor() {}
}
