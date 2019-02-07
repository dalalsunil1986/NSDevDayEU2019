import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
  moduleId: module.id,
  selector: "ns-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @Input() active: string;
  scheduleActive: string;
  speakersActive: string;
  locationActive: string;
  aboutActive: string;

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.scheduleActive = this.active === "schedule" ? "-active" : "";
    this.speakersActive = this.active === "speakers" ? "-active" : "";
    this.locationActive = this.active === "location" ? "-active" : "";
    this.aboutActive = this.active === "about" ? "-active" : "";
  }

  onNavItemTap(navItemRoute: string) {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });
  }
}
