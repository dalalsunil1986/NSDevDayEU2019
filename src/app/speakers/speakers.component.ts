import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("Carousel", () => require("nativescript-carousel").Carousel);
registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);

import { Speaker } from "./../models/speaker.model";
import { SpeakerService } from "./../services/speaker.service";

@Component({
  moduleId: module.id,
  selector: "ns-speakers",
  templateUrl: "./speakers.component.html",
  styleUrls: ["./speakers.component.scss"]
})
export class SpeakersComponent implements OnInit, AfterViewInit {
  @ViewChild("carousel") carouselRef: ElementRef;
  speakers: Array<Speaker> = [];

  constructor(private page: Page, private routerExtensions: RouterExtensions, private speakerService: SpeakerService) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.speakers = this.speakerService.getSpeakers();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const carousel = this.carouselRef.nativeElement;
      const speakerIndex = this.speakers.findIndex(obj => obj.id == 17);
      carousel.selectedPage = speakerIndex;
    }, 500);
  }

  onTap() {}

  onNavItemTap(navItemRoute: string) {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });
  }
}
