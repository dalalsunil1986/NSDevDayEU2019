import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: "ns-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"]
})
export class LocationComponent implements OnInit {
  active: string;

  constructor(private page: Page) {}

  ngOnInit() {
    this.active = "location";
    this.page.actionBarHidden = true;
  }
}
