import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

// import { Speaker } from "./../models/speaker.model";
import { SpeakerService } from "./../services/speaker.service";

@Component({
  moduleId: module.id,
  selector: "ns-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"]
})
export class ScheduleComponent implements OnInit {
  constructor(private page: Page, private routerExtensions: RouterExtensions, private speakerService: SpeakerService) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    // this.speakers = this.speakerService.getSpeakers();
  }
}
