import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { screen } from "tns-core-modules/platform";
import * as Utility from "utils/utils";

import { LocationService } from "./../services/location.service";

@Component({
  moduleId: module.id,
  selector: "ns-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"]
})
export class LocationComponent implements OnInit {
  active: string;
  intro: string;
  address: string;
  parking: string;
  publictransport: string;

  constructor(private page: Page, private locationService: LocationService) {}

  ngOnInit() {
    this.active = "location";
    this.page.actionBarHidden = true;
    this.intro = this.locationService.getIntro();
    this.address = this.locationService.getAddress();
    this.parking = this.locationService.getParking();
    this.publictransport = this.locationService.getPublicTransport();
  }

  calculateWidth() {
    return screen.mainScreen.widthDIPs * 0.9; // 90% of screen width
  }

  openUrl(url: string) {
    Utility.openUrl(url);
  }
}
