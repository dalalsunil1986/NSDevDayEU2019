import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { screen } from "tns-core-modules/platform";

import { Schedule } from "./../models/schedule.model";
import { Speaker } from "./../models/speaker.model";

import { ScheduleService } from "./../services/schedule.service";
import { SpeakerService } from "./../services/speaker.service";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures";

@Component({
  moduleId: module.id,
  selector: "ns-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"]
})
export class ScheduleComponent implements OnInit {
  active: string;
  schedule: Array<Schedule> = [];
  speakers: Array<Speaker> = [];
  dialogOpen: boolean = false;
  selectedId: number = 1;
  selectable: boolean = true;

  constructor(private page: Page, private scheduleService: ScheduleService, private speakerService: SpeakerService) { }

  ngOnInit() {
    this.active = "schedule";
    this.page.actionBarHidden = true;
    this.schedule = this.scheduleService.getSchedule();
    this.schedule.forEach(scheduleItem => {
      scheduleItem.speakerDetails = this.speakerService.getSpeakerById(scheduleItem.speaker);
    });
  }

  onScheduleItemTouch(args: TouchGestureEventData, idx: number) {
    if (args.action === 'down') {
      this.selectable = true;
    }
    else if (args.action === 'up' && this.selectable) {
      setTimeout(() => {
        this.showDialog(idx);
      }, 10);
      this.selectable = true;
    }
  }

  showDialog(id: number) {
    this.selectedId = id;
    this.dialogOpen = this.schedule[this.selectedId].talk;
    this.selectable = true;
  }

  onScroll() {
    this.selectable = false;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  calculateLeft() {
    return screen.mainScreen.widthDIPs * 0.05; // 5% of screen width
  }

  getImage() {
    let image = "";
    if (this.schedule[this.selectedId].speakerDetails) {
      image = `~/images/${this.schedule[this.selectedId].speakerDetails.image}.jpg`;
    }
    return image;
  }

  getSpeaker() {
    const name = this.schedule[this.selectedId].speakerDetails ? this.schedule[this.selectedId].speakerDetails.name : "";
    return name;
  }

  getTitle() {
    return this.schedule[this.selectedId].title;
  }

  getDescription() {
    return this.schedule[this.selectedId].description;
  }
}
