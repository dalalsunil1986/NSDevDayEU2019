import { Injectable } from "@angular/core";
import { getString } from "application-settings";

@Injectable()
export class LocationService {
  private location: any;

  constructor() {
    let dataJson = getString("dataJson");
    this.location = JSON.parse(dataJson).location;
  }

  getIntro(): string {
    return this.location.intro;
  }

  getAddress(): string {
    return this.location.address;
  }

  getParking(): string {
    return this.location.parking;
  }

  getPublicTransport(): string {
    return this.location.publictransport;
  }
}
