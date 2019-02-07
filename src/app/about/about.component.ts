import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

import { AboutService } from "./../services/about.service";

@Component({
  moduleId: module.id,
  selector: "ns-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  active: string;
  team: string;
  app: string;
  cocIntro: string;
  cocContact: string;
  cocQuick: string;
  cocComplete: string;

  constructor(private page: Page, private aboutService: AboutService) {}

  ngOnInit() {
    this.active = "about";
    this.page.actionBarHidden = true;
    this.team = this.aboutService.getTeam();
    this.app = this.aboutService.getApp();
    this.cocIntro = this.aboutService.getCoc(0);
    this.cocContact = this.aboutService.getCoc(1);
    this.cocQuick = this.aboutService.getCoc(2);
    this.cocComplete = this.aboutService.getCoc(3);
  }
}
