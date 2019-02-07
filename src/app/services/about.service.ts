import { Injectable } from "@angular/core";
import { getString } from "application-settings";

@Injectable()
export class AboutService {
  private about: any;

  constructor() {
    let dataJson = getString("dataJson");
    this.about = JSON.parse(dataJson).about;
  }

  getTeam(): string {
    return this.about.team;
  }

  getApp(): string {
    return this.about.app;
  }

  getCoc(id): string {
    return this.about.coc[id].text;
  }
}
