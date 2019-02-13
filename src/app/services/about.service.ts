import { Injectable } from "@angular/core";
import { getString } from "application-settings";

@Injectable()
export class AboutService {
  private about: any;
  private version: number;

  constructor() {
    const data = getString("data");
    const dataObj = JSON.parse(data);
    this.about = dataObj.about;
    this.version = dataObj.version;
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

  getVersion(): number {
    return this.version;
  }
}
