import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import * as app from "tns-core-modules/application";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("Carousel", () => require("nativescript-carousel").Carousel);
registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
  moduleId: module.id,
  selector: "ns-speakers",
  templateUrl: "./speakers.component.html",
  styleUrls: ["./speakers.component.scss"]
})
export class SpeakersComponent implements OnInit {
  constructor(private page: Page, private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  onNavItemTap(navItemRoute: string) {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });
  }

  fabTap() {
    console.log("tapped");
  }
}
