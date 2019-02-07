import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

import { Speaker } from "./../models/speaker.model";
import { SpeakerService } from "./../services/speaker.service";

@Component({
  moduleId: module.id,
  selector: "ns-speakers",
  templateUrl: "./speakers.component.html",
  styleUrls: ["./speakers.component.scss"]
})
export class SpeakersComponent implements OnInit {
  active: string;
  speakers: Array<Speaker> = [];

  constructor(private page: Page, private routerExtensions: RouterExtensions, private speakerService: SpeakerService) {}

  ngOnInit() {
    this.active = "speakers";
    this.page.actionBarHidden = true;
    this.speakers = this.speakerService.getSpeakers();
  }
}
